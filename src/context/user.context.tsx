import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { users, type User } from "../mock-data/user-mock-data";
import { toast } from "react-toastify";

interface UserProviderProps {
    children: ReactNode;
}

interface UserContextType {
    isAuthenticated: boolean;

    user: User | null;

    login: (email: string, password: string) => boolean;
    logout: () => void;
    signin: (data: string) => boolean;
}


export const UserContext = createContext({} as UserContextType);


export const UserProvider = ({ children }: UserProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (email: string, password: string) => {
        const user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            console.log("Usuario no encontrado.");
            setUser(null);
            setIsAuthenticated(false);
            toast.error("Usuario no encontrado. Compruebe sus credenciales e intentelo denuevo.");
            return false;
        }

        console.log("Usuario encontrado.")
        setIsAuthenticated(true);
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isAuthenticated", JSON.stringify(true));
        return true;
    }

    const handleLogout = () => {
        setUser(null)
        setIsAuthenticated(false);
        localStorage.removeItem("user");
        localStorage.removeItem("isAuthenticated");
    }

    const handleSignIn = (data: string) => {
        const { fullName, email, phone, birthDate, username, password } = JSON.parse(data);

        const newUser: User = {
            id: users.length + 1,
            fullName,
            email,
            phone,
            birthDate,
            username,
            password
        };


        //PONER AQUI REGISTRO DE newUser CON API


        toast.success("Usuario registrado correctamente.");
        return true;
    }

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedIsAuthenticated = localStorage.getItem("isAuthenticated");

        if (storedUser && storedIsAuthenticated) {
            const parsedUser = JSON.parse(storedUser);
            handleLogin(parsedUser.email, parsedUser.password);
        }
    }, [])

    return (
        <UserContext value={{
            isAuthenticated,
            user,
            login: handleLogin,
            logout: handleLogout,
            signin: handleSignIn
        }}>
            {children}
        </UserContext>
    );
};