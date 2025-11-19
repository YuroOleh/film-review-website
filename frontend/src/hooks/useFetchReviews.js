import { useEffect, useState } from "react";
import { reviewsService } from "../services/reviewsService";

export const useFetchReviews = (sortBy, orderBy, search) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    reviewsService.getAll(sortBy, orderBy, search)
      .then(setReviews)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [sortBy, orderBy, search]);

  return { reviews, loading, error };
};