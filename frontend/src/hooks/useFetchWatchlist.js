import { useEffect, useState } from "react";
import { watchlistService } from "../services/watchlistService";

export function useFetchWatchlist(userId, currentPage = 1, pageSize = 9) {
    const [watchlist, setWatchlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!userId) return;

        setLoading(true);
        watchlistService.getAll(userId, currentPage, pageSize)
            .then(data => {
                setWatchlist(data.results || []);
                setTotalPages(data.total_pages || 1);
                setCount(data.count || 0);
            })
            .catch(setError)
            .finally(() => setLoading(false));
    }, [userId, currentPage, pageSize]);

    return { watchlist, loading, error, totalPages, count };
}
