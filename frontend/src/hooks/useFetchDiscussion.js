import { useEffect, useState } from "react";
import { discussionsService } from "../services/discussionsService";

export const useFetchDiscussion = (id) => {
  const [discussion, setDiscussion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    discussionsService.getById(id)
      .then(setDiscussion)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  return { discussion, loading, error };
};