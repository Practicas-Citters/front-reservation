import type { Payment } from "./payment-mock-cata.js";

type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Booking {
        userId: string,
        courtId: string,
        date: string,
        startTime: string, // Format: "HH:mm"
        endTime: string,   // Format: "HH:mm"
        numPeople: number,
        totalPrice: number,
        status?: BookingStatus,
        payment?: Payment | null, // Related to payment
        createdAt?: string,
        updatedAt?: string
}