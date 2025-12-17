import { useEffect, useState } from "react";
import { discussionsService } from "../services/discussionsService";

export function useFetchDiscussions(
    sortBy,
    orderBy,
    search,
    page,
    pageSize,
    userId
) {
    const [discussions, setDiscussions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function load() {
            try {
                setLoading(true);
                setError(false);

                const data = await discussionsService.getAll(
                    sortBy,
                    orderBy,
                    search,
                    page,
                    pageSize,
                    userId
                );

                setDiscussions(data.results || []);
                setCount(data.count || 0);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [sortBy, orderBy, search, page, pageSize, userId]);

    return {
        discussions,
        loading,
        error,
        count
    };
}
