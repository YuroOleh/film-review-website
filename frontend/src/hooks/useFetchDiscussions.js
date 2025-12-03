import { useEffect, useState } from "react";
import { discussionsService } from "../services/discussionsService";

export function useFetchDiscussions(sortBy, orderBy, search) {
    const [discussions, setDiscussions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function load() {
            try {
                setLoading(true);
                setError(false);

                const data = await discussionsService.getAll(
                    sortBy,
                    orderBy,
                    search,
                    currentPage
                );

                setDiscussions(data.results || []);
                setTotalPages(data.total_pages || 1);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [sortBy, orderBy, search, currentPage]);

    return {
        discussions,
        loading,
        error,
        totalPages,
        currentPage,
        setCurrentPage
    };
}