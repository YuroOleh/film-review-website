import { useEffect, useState } from "react";
import { newsService } from "../services/newsService";

export function useFetchNews(sortBy, orderBy, search, page, pageSize = 6) {
  const [data, setData] = useState({ results: [], count: 0, next: null, previous: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    newsService.getAll(sortBy, orderBy, search, page, pageSize)
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
    news: data.results,
    count: data.count,
    next: data.next,
    previous: data.previous,
    loading,
    error
  };
}