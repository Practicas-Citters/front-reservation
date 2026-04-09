import type { Sport } from "../mock-data/sport-mock-data";
import type { Court } from "../mock-data/court-mock-data";

export const fetchSports = async (): Promise<Sport[]> => {
    const response = await fetch("/api/sport");
    if (!response.ok) throw new Error("Error fetching sports");
    return response.json();
};

export const fetchCourts = async (): Promise<Court[]> => {
    const response = await fetch("/api/court");
    if (!response.ok) throw new Error("Error fetching courts");
    return response.json();
};

export const fetchSchedule = async (courtId: string, date: string): Promise<any[]> => {
    const response = await fetch(`/api/schedules/court/${courtId}/date/${date}`);
    if (!response.ok) throw new Error("Error fetching schedule");
    return response.json();
};

export const checkAvailability = async (courtId: string, date: string, startTime: string, endTime: string): Promise<boolean> => {
    const response = await fetch(`/api/booking/check-availability`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            courtId,
            date,
            startTime,
            endTime,
        }),
    });
    if (!response.ok) throw new Error("Error checking availability");
    return response.json();
};

export const fetchBookingsbyCourt = async (courtId: string): Promise<any[]> => {
    const response = await fetch(`/api/booking/search/court/${courtId}`);
    if (!response.ok) throw new Error("Error fetching bookings");
    return response.json();
};

