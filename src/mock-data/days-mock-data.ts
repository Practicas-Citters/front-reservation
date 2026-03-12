import type { Court } from "./court-mock-data.js";

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface Schedule {
        id: string,
        court: Court,
        dayOfWeek: DayOfWeek,
        startTime: string,
        endTime: string
}