export interface User {
    id: string;
    fullName: string,
    email: string,
    phone: string,
    birthDate: string,
    username: string,
    password: string,
    isPremium?: boolean,
    points?: number
}

export const users: User[] =
    [
        {
            id: "a538e938-d0ae-4390-9160-13a45bcdd07f",
            fullName: "Alex García",
            email: "alex.garcia@email.com",
            phone: "600111222",
            birthDate: "1990-05-15",
            username: "alexg",
            password: "password123",
            isPremium: false,
            points: 0
        },
        {
            id: "a538e938-d0ae-4390-9160-13a45bcdd07f",
            fullName: "Lucía Martínez",
            email: "lucia.mtz@email.com",
            phone: "611222333",
            birthDate: "1988-10-22",
            username: "luciam",
            password: "securePass789",
            isPremium: false,
            points: 0
        },
        {
            id: "a538e938-d0ae-4390-9160-13a45bcdd07f",
            fullName: "Diego Rodríguez",
            email: "diego.rod@email.com",
            phone: "622333444",
            birthDate: "1995-03-08",
            username: "diegor",
            password: "mySecretPassword",
            isPremium: true,
            points: 0
        },
        {
            id: "a538e938-d0ae-4390-9160-13a45bcdd07f",
            fullName: "Elena Sánchez",
            email: "elena.san@email.com",
            phone: "633444555",
            birthDate: "2000-12-01",
            username: "elenas",
            password: "user2024!",
            isPremium: false,
            points: 0
        },
        {
            id: "a538e938-d0ae-4390-9160-13a45bcdd07f",
            fullName: "Javier López",
            email: "javier.lopez@email.com",
            phone: "644555666",
            birthDate: "1982-07-30",
            username: "javi_l",
            password: "login987",
            isPremium: true
        },
        {
            id: "a538e938-d0ae-4390-9160-13a45bcdd07f",
            fullName: "Pedro Pruebas",
            email: "pruebasfront@gmail.com",
            phone: "+34578834245",
            birthDate: "2005-03-03",
            username: "pruebasfront",
            password: "front123",
            isPremium: true
        }
    ];