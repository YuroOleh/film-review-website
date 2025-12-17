import { useState } from "react";
import { reviewsService } from "../services/reviewsService";

export function useWriteReview() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function writeReview(filmId, userId, text, rating) {
    setLoading(true);
    setError(null);

    try {
      const result = await reviewsService.writeReview(
        filmId,
        String(userId),
        text,
        rating
      );
      return result;
    } catch (err) {
      setError(err.message || "Failed to create discussion");
    } finally {
      setLoading(false);
    }
  }

  return { writeReview, loading, error };
}