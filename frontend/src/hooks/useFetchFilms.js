import { useEffect, useState } from "react";
import { filmsService } from "../services/filmsService";

export const useFetchFilms = (sortBy, orderBy, search) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    filmsService.getAll(sortBy, orderBy, search)
      .then(setFilms)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [sortBy, orderBy, search]);

  return { films, loading, error };
};