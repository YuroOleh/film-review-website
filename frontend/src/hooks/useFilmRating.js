import { useState, useEffect } from "react";
import { reviewsService } from "../services/reviewsService";

export function useFilmRating(filmId) {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!filmId) return;

    reviewsService.calculateRating(filmId)
      .then((avg) => setRating(avg))
      .catch((err) => setError(err.message || "Failed to calculate rating"))
      .finally(() => setLoading(false));
  }, [filmId]);

  return { rating, loading, error };
}