import { useEffect, useState } from "react";
import { reviewsService } from "../services/reviewsService";

export function useFetchReviews(sortBy, orderBy, search, currentPage, reviewsPerPage) {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function load() {
            try {
                setLoading(true);
                setError(false);

                const data = await reviewsService.getAll(sortBy, orderBy, search, currentPage);
                
                setReviews(data.results || []);
                setTotalPages(Math.max(1, Math.ceil((data.count || 0) / reviewsPerPage)));
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [sortBy, orderBy, search, currentPage, reviewsPerPage]);

    return { reviews, loading, error, totalPages };
}