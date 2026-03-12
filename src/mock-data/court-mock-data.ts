import { Sports, type Sport } from "./sport-mock-data";
import { users, type User } from "./user-mock-data";

export interface Court {
    id: string,
    name: string,
    description: string,
    image: string,
    capacity: number,
    pricePerHour: number,
    isAvailable: boolean,
    sport: Sport,
    user: User
}

export const Courts: Court[] =
    [
        {
            id: "c867ebd0-fb80-4ecb-80d8-d39a7f31391c",
            name: "Court1",
            description: "Test Court",
            image: "https://media.istockphoto.com/id/1346567877/es/foto/fondo-deportivo-de-f%C3%BAtbol-sala-bal%C3%B3n-de-f%C3%BAtbol-sala-y-suelo-pabell%C3%B3n-deportivo-de-f%C3%BAtbol-sala.jpg?s=2048x2048&w=is&k=20&c=j9v1ZQ0VEAqxPtWHJDwTisgVL7e67mm3uPAoTCiRKu8=",
            capacity: 22,
            pricePerHour: 50,
            isAvailable: true,
            sport: Sports[0],
            user: users[0]
        }
    ]