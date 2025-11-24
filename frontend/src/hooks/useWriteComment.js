import { useState } from "react";
import { commentsService } from "../services/commentsService";

export function useWriteComment() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function writeComment(articleId, userId, text) {
    try {
      const result = await commentsService.writeComment(articleId, userId, text);
      return result;
    } catch (err) {
      setError(err.message || "Failed to write comment");
    } finally {
      setLoading(false);
    }
  }

  return { writeComment, loading, error };
}