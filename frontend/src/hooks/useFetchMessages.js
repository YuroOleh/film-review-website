import { useState, useEffect } from "react";
import { messagesService } from "../services/messagesService";

export function useFetchMessages(discussionId) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!discussionId) return;

    setLoading(true);
    messagesService.getAll(discussionId)
      .then((data) => setMessages(data))
      .catch((err) => setError(err.message || "Failed to fetch messages"))
      .finally(() => setLoading(false));
  }, [discussionId]);

  return { messages, loading, error };
}
