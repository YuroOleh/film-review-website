import { useState, useEffect } from "react";
import { usersService } from "../services/usersService";

export function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    usersService.getUser(userId)
      .then((data) => setUser(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));

  }, [userId]);

  return { user, loading, error };
}