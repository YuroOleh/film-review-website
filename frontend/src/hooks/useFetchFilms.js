import { useEffect, useState } from "react";
import { filmsService } from "../services/filmsService";

export function useFetchFilms(sortBy, orderBy, search, page, pageSize = 9) {
  const [data, setData] = useState({ results: [], count: 0, next: null, previous: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    filmsService.getAll(sortBy, orderBy, search, page, pageSize)
      .then(res => {
        setData({
          results: res.results || [],
          count: res.count || 0,
          next: res.next || null,
          previous: res.previous || null
        });
        setError(null);
      })
      .catch(err => {
        setError(err);
        setData({ results: [], count: 0, next: null, previous: null });
      })
      .finally(() => setLoading(false));

  }, [sortBy, orderBy, search, page, pageSize]);

  return {
    films: data.results,
    count: data.count,
    next: data.next,
    previous: data.previous,
    loading,
    error
  };
}