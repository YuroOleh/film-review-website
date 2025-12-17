import { useState, useEffect } from "react";
import { viewsService } from "../services/viewsService";

export function useViewsCount(newsId) {
  const [views, setViews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!newsId) return;

    const fetchViews = async () => {
      setLoading(true);
      setError(null);
      try {
        const count = await viewsService.getViewsCount(newsId);
        setViews(count);
      } catch (err) {
        setError(err.message || "Failed to fetch views");
      } finally {
        setLoading(false);
      }
    };

    fetchViews();
  }, [newsId]);

  return { views, loading, error };
}