import { useState } from "react";
import { viewsService } from "../services/viewsService";

export function useMarkAsViewed() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const markAsViewed = async (newsId, userId) => {

    try {
      await viewsService.markAsViewed(newsId, userId);
    } catch (err) {
      setError(err.message || "Failed to mark as viewed");
    } finally {
      setLoading(false);
    }
  };

  return { markAsViewed, loading, error };
}