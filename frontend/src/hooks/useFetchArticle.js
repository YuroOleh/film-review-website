import { useEffect, useState } from "react";
import { newsService } from "../services/newsService";

export const useFetchArticle = (id) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    newsService.getById(id)
      .then(setArticle)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return { article, loading, error };
};