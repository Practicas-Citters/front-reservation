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
