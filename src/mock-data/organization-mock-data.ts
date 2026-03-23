import type { User } from "./user-mock-data.ts";

export interface Organization {
        id: string,
        name: string,
        description: string | null,
        email: string,
        phone: string,
        address: string,
        city: string,
        zipCode: string,
        logo: string | null,
        bannerImage: string | null,
        isActive: boolean,
        managers: User[] //We will use this as an array just in case there is more than one account per organization
}