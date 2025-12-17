import { useEffect, useState } from "react";
import { filmsService } from "../services/filmsService";

export const useFetchFilm = (id) => {
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    filmsService.getById(id)
      .then(setFilm)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return { film, loading, error };
};