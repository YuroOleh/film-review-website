import { useEffect, useState } from "react";
import { reviewsService } from "../services/reviewsService";

export const useFetchFilmReviews = (filmId) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!filmId) return;

    reviewsService.getReviewsByFilmId(filmId)
      .then(setReviews)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [filmId]);

  return { reviews, loading, error };
};