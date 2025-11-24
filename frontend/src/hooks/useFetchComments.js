import { useState, useEffect } from "react";
import { commentsService } from "../services/commentsService";

export function useFetchComments(articleId) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!articleId) return;

    commentsService.getAll(articleId)
      .then((data) => setComments(data))
      .catch((err) => setError(err.message || "Failed to fetch comments"))
      .finally(() => setLoading(false));
  }, [articleId]);

  return { comments, loading, error };
}
