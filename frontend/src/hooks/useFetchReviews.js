import { useEffect, useState } from "react";
import { reviewsService } from "../services/reviewsService";

export const useFetchReviews = (sortBy, orderBy) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    reviewsService.getAll(sortBy, orderBy)
      .then(setReviews)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [sortBy, orderBy]);

  return { reviews, loading, error };
};