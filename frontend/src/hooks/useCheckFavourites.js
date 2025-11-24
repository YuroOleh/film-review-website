import { useState, useEffect } from "react";
import { favouritesService } from "../services/favouritesService";

export function useCheckFavourites(userId, filmId) {
    const [isInFavourites, setIsInFavourites] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        favouritesService.checkInFavourites(userId, filmId)
            .then(setIsInFavourites)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [userId, filmId]);

    return { isInFavourites, loading, error};
}