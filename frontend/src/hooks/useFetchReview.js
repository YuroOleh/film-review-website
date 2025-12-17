import { useEffect, useState } from "react";
import { reviewsService } from "../services/reviewsService";

export const useFetchReview = (id) => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    reviewsService.getById(id)
      .then(setReview)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return { review, loading, error };
};