import { useEffect, useState } from "react";
import { watchlistService } from "../services/watchlistService";

export function useFetchWatchlist(userId) {
    const [watchlist, setWatchlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        watchlistService.getAll(userId)
            .then(setWatchlist)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [userId]);

    return { watchlist, loading, error};
}
