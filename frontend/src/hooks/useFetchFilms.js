import { useEffect, useState } from "react";
import { filmsService } from "../services/filmsService";

export const useFetchFilms = (sortBy, orderBy) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    filmsService.getAll(sortBy, orderBy)
      .then(setFilms)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [sortBy, orderBy]);

  return { films, loading, error };
};