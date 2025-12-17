import { useState } from "react";
import { watchlistService } from "../services/watchlistService";

export function useAddFilmToWatchlist() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function addFilm(userId, filmId) {
        try {
            const result = await watchlistService.addToWatchlist(userId, filmId);
            return result; 
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return { addFilm, loading, error };
}
