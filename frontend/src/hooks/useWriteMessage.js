import { useState } from "react";
import { messagesService } from "../services/messagesService";

export function useWriteMessage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function writeMessage(discussionId, userId, text) {
    try {
      const result = await messagesService.writeMessage(discussionId, userId, text);
      return result;
    } catch (err) {
      setError(err.message || "Failed to write message");
    } finally {
      setLoading(false);
    }
  }

  return { writeMessage, loading, error };
}