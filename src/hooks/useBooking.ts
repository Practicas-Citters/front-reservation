import { useQuery } from "@tanstack/react-query";
import { fetchSports, fetchCourts } from "../services/api";

export const useSports = () => {
    return useQuery({
        queryKey: ["sports"],
        queryFn: async () => {
            const data = await fetchSports();
            return data.map(sport => ({
                ...sport,
                iconUrl: sport.iconUrl.startsWith("http") || sport.iconUrl.startsWith("/")
                    ? sport.iconUrl
                    : `/icons/${sport.iconUrl}`
            }));
        },
        staleTime: 1000 * 60 * 5,
    });
};

export const useCourts = () => {
    return useQuery({
        queryKey: ["courts"],
        queryFn: async () => {
            const data = await fetchCourts();
            return data.map(court => ({
                ...court,
                image: court.image.startsWith("http") || court.image.startsWith("/")
                    ? court.image
                    : `/icons/${court.image}`
            }));
        },
        staleTime: 1000 * 60 * 5,
    });
};
