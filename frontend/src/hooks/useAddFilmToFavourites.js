import { useState } from "react";
import { favouritesService } from "../services/favouritesService";

export function useAddFilmToFavourites() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function addFilm(userId, filmId) {
        try {
            const result = await favouritesService.addToFavourites(userId, filmId);
            return result; 
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return { addFilm, loading, error };
}
