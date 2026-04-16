import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { type User } from "../mock-data/user-mock-data";
import { toast } from "react-toastify";

interface UserProviderProps {
    children: ReactNode;
}

interface UserContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    favoriteCourts: any[];

    user: User | null;

    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    signin: (data: string) => Promise<boolean>;
    updateUser: (username: string, fullname: string, email: string, phone: string, birthDate: string) => void;
    fetchPreviousBookings: (email: string) => Promise<any[]>;
    createNewBooking: (email: string, bookingData: any) => void;
    addFavoriteCourt: (court: any) => Promise<void>;
    getFavoriteCourts: () => any[];
    removeFavoriteCourt: (courtId: string) => void;
}


export const UserContext = createContext({} as UserContextType);


export const UserProvider = ({ children }: UserProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [favoriteCourts, setFavoriteCourts] = useState<any[]>([]);

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await fetch("/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (data.error) {
                console.log("Error en el login:", data.error);
                setUser(null);
                setIsAuthenticated(false);
                toast.error("Error al iniciar sesión. Compruebe sus credenciales e intentelo de nuevo.");
                return false;
            }

            console.log("Usuario encontrado:", data.user.username);
            
            const userData = data.user;
            setIsAuthenticated(true);
            setUser(userData);
            
            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("isAuthenticated", JSON.stringify(true));
            
            if (userData.favCourts) {
                setFavoriteCourts(userData.favCourts);
                localStorage.setItem("favoriteCourts", JSON.stringify(userData.favCourts));
            }
            
            return true;
        } catch (error) {
            console.error("Error en la petición de login:", error);
            toast.error("Error de conexión con el servidor.");
            return false;
        }
    }

    const handleLogout = () => {
        setUser(null)
        setIsAuthenticated(false);
        setFavoriteCourts([]);
        localStorage.removeItem("user");
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("favoriteCourts");
    }

    const handleSignIn = async (data: string) => {
        const { fullName, email, phone, birthDate, username, password } = JSON.parse(data);

        const newUser: User = {
            fullName,
            username,
            email,
            password,
            phone,
            birthDate
        };

        const response = await fetch("/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

        if (!response.ok) {
            console.log("Error al registrar el usuario.");
            toast.error("Error al registrar el usuario.");
            return false;
        }

        toast.success("Usuario registrado correctamente.");
        return true;
    }

    const handleUserUpdate = async (username: string, fullname: string, email: string, phone: string, birthDate: string) => {
        const user = await fetch("/api/user/search/email/" + email).then(response => response.json());

        const updatedUser = {
            fullName: fullname,
            username: username,
            phone: phone,
            birthDate: birthDate,
        };

        fetch("/api/user/" + user.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al actualizar el usuario.");
                }
                toast.success("Usuario actualizado correctamente.");
            })
            .catch(error => {
                console.error("Error al actualizar el usuario:", error);
                toast.error("Error al actualizar el usuario.");
            });
    }

    const FetchPreviousBookings = async (email: string) => {
        const user = await fetch("/api/user/search/email/" + email).then(response => response.json());
        const bookings = await fetch("/api/booking/search/user/" + user.id).then(response => response.json());
        return bookings;
    }

    const createNewBooking = async (email: string, bookingData: any) => {
        const user = await fetch("/api/user/search/email/" + email).then(response => response.json());
        const newBooking = {
            userId: user.id,
            ...bookingData
        };

        fetch("/api/booking/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBooking)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al crear la reserva.");
                }
                toast.success("Reserva creada correctamente.");
            })
            .catch(error => {
                console.error("Error al crear la reserva:", error);
                toast.error("Error al crear la reserva.");
            });
    }

    const addFavoriteCourt = async (court: any) => {
        const user = localStorage.getItem("user");
        const storedUser = JSON.parse(user!);
        const courtId = typeof court === 'string' ? court : court.id;
        const newFavorites = [...favoriteCourts, court];
        const favCourtsIds = newFavorites.map((c: any) => typeof c === 'string' ? c : c.id);
        fetch("/api/user/" + storedUser.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ favCourtsIds })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al añadir la pista a favoritos.");
                }
                setFavoriteCourts(newFavorites);
                localStorage.setItem("favoriteCourts", JSON.stringify(newFavorites));
            })
            .catch(error => {
                console.error("Error al añadir la pista a favoritos:", error);
                toast.error("Error al añadir la pista a favoritos.");
            });
    }

    const getFavoriteCourts = () => {
        const user = localStorage.getItem("user");
        const storedUser = JSON.parse(user!);
        return storedUser.favCourts;
    }

    const removeFavoriteCourt = (courtId: string) => {
        const user = localStorage.getItem("user");
        const storedUser = JSON.parse(user!);
        const filtered = favoriteCourts.filter((c: any) => {
            const id = typeof c === 'string' ? c : c.id;
            return id !== courtId;
        });
        const favCourtsIds = filtered.map((c: any) => typeof c === 'string' ? c : c.id);
        fetch("/api/user/" + storedUser?.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ favCourtsIds })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al eliminar la pista de favoritos.");
                }
                setFavoriteCourts(filtered);
                localStorage.setItem("favoriteCourts", JSON.stringify(filtered));
            })
            .catch(error => {
                console.error("Error al eliminar la pista de favoritos:", error);
                toast.error("Error al eliminar la pista de favoritos.");
            });
    }

    useEffect(() => {
        const restoreSession = async () => {
            const storedUser = localStorage.getItem("user");
            const storedIsAuthenticated = localStorage.getItem("isAuthenticated");
            const storedFavorites = localStorage.getItem("favoriteCourts");

            if (storedFavorites) {
                setFavoriteCourts(JSON.parse(storedFavorites));
            }

            if (storedUser && storedIsAuthenticated) {
                setUser(JSON.parse(storedUser));
                setIsAuthenticated(true);
            }

            setIsLoading(false);
        };

        restoreSession();
    }, [])

    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem("favoriteCourts", JSON.stringify(favoriteCourts));
        }
    }, [favoriteCourts, isAuthenticated])

    return (
        <UserContext value={{
            isAuthenticated,
            isLoading,
            favoriteCourts,
            user,
            login: handleLogin,
            logout: handleLogout,
            signin: handleSignIn,
            updateUser: handleUserUpdate,
            fetchPreviousBookings: FetchPreviousBookings,
            createNewBooking: createNewBooking,
            addFavoriteCourt: addFavoriteCourt,
            getFavoriteCourts: getFavoriteCourts,
            removeFavoriteCourt: removeFavoriteCourt
        }}>
            {children}
        </UserContext>
    );
};