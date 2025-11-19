import { useEffect, useState } from "react";
import { newsService } from "../services/newsService";

export const useFetchNews = (sortBy, orderBy, search) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    newsService.getAll(sortBy, orderBy, search)
      .then(setNews)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [sortBy, orderBy, search]);

  return { news, loading, error };
};