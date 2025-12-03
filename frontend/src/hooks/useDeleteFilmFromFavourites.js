import { useState } from "react";
import { favouritesService } from "../services/favouritesService";

export function useDeleteFilmFromFavourites() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function deleteFilm(userId, filmId) {
        try {
            const result = await favouritesService.removeFromFavourites(userId, filmId);
            return result; 
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return { deleteFilm, loading, error };
}