import { useEffect, useState } from "react";
import { discussionsService } from "../services/discussionsService";

export const useFetchFilmDiscussions = (filmId) => {
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!filmId) return;

    discussionsService.getDiscussionsByFilmId(filmId)
      .then(setDiscussions)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [filmId]);

  return { discussions, loading, error };
};