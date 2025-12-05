import { useEffect, useState } from "react";
import { reviewsService } from "../services/reviewsService";

export function useFetchReviews(sortBy = "date", orderBy = "desc", search = "", page = 1, pageSize = 6, userId = "", filmId = "") {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [count, setTotalPages] = useState(1);

    useEffect(() => {
        async function load() {
            try {
                setLoading(true);
                setError(false);

                const data = await reviewsService.getAll(sortBy, orderBy, search, page, pageSize, userId, filmId);
                
                setReviews(data.results || []);
                setTotalPages(Math.max(1, Math.ceil((data.count || 0) / pageSize)));
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [sortBy, orderBy, search, page, pageSize, userId, filmId]);

    return { reviews, loading, error, count };
}
