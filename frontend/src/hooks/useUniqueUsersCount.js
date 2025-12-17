import { useState, useEffect } from "react";
import { messagesService } from "../services/messagesService";

export function useUniqueUsersCount(discussionId) {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!discussionId) return;

        setLoading(true);
        messagesService.getUniqueUsersCount(discussionId)
            .then(c => setCount(c))
            .catch(err => setError(err.message || "Failed to fetch unique users count"))
            .finally(() => setLoading(false));
    }, [discussionId]);

    return { count, loading, error };
}