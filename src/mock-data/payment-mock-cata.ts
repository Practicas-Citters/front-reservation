import type { Booking } from "./booking-mock-data.js";

type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

type PaymentMethod = 'stripe' | 'paypal' | 'cash' | 'card';

export interface Payment {
        id: string,
        amount: number,
        status: PaymentStatus,
        method: PaymentMethod,
        transactionId: string | null,
        userId: string, // ID of the user performing the payment
        booking: Booking, // Associated booking
        createdAt: string
}