import { useState } from "react";
import { watchlistService } from "../services/watchlistService";

export function useDeleteFilmFromWatchlist() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function deleteFilm(userId, filmId) {
        try {
            const result = await watchlistService.removeFromWatchlist(userId, filmId);
            return result; 
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return { deleteFilm, loading, error };
}