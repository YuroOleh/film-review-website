import { useState, useEffect } from "react";
import { watchlistService } from "../services/watchlistService";

export function useCheckWatchlist(userId, filmId) {
    const [isInWatchlist, setIsInWatchlist] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        watchlistService.checkInWatchlist(userId, filmId)
            .then(setIsInWatchlist)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [userId, filmId]);

    return { isInWatchlist, loading, error};
}