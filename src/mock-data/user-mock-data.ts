export interface User {
    id?: string;
    fullName: string;
    email: string;
    phone: string;
    birthDate: string;
    username: string;
    password?: string;
    isPremium?: boolean;
    role?: string;
    points?: number;
    profilePicture?: string;
    favCourts?: any[];
}