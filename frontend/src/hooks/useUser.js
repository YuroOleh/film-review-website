import { useState, useEffect } from "react";
import { authService2 } from "../services/authService2";

export function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    authService2.user(userId)
      .then((data) => setUser(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));

  }, [userId]);

  return { user, loading, error };
}