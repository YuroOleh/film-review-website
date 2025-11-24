import { useState } from "react";
import { discussionsService } from "../services/discussionsService";

export function useCreateDiscussion() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function createDiscussion(filmId, userId, title) {
    setLoading(true);
    setError(null);

    try {
      const result = await discussionsService.createDiscussion(
        filmId,
        String(userId),
        title
      );
      return result;
    } catch (err) {
      setError(err.message || "Failed to create discussion");
    } finally {
      setLoading(false);
    }
  }

  return { createDiscussion, loading, error };
}