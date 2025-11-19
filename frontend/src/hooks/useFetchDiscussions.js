import { useEffect, useState } from "react";
import { discussionsService } from "../services/discussionsService";

export const useFetchDiscussions = (sortBy, orderBy) => {
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    discussionsService.getAll(sortBy, orderBy)
      .then(setDiscussions)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [sortBy, orderBy]);

  return { discussions, loading, error };
};