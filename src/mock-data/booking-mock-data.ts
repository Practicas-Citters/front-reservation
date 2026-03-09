import type { User } from "./user-mock-data.js";
import type { Court } from "./court-mock-data.js";
import type { Payment } from "./payment-mock-cata.js";

type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Booking {
        id: string,
        user: User,
        court: Court,
        date: string,
        startTime: string, // Format: "HH:mm"
        endTime: string,   // Format: "HH:mm"
        numPeople: number,
        totalPrice: number,
        status: BookingStatus,
        payment: Payment | null, // Related to payment
        createdAt: string,
        updatedAt: string
}