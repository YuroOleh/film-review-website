const API_URL = import.meta.env.VITE_API_URL + "news/comments/";

export const commentsService = {
  async getAll(articleId) {
    const res = await fetch(`${API_URL}?articleId=${articleId}&ordering=created_at`);
    if (!res.ok) throw new Error("Comments were not found...");
    return res.json();
  },

  async getById(id) {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Comment was not found...");
    return res.json();
  },

  async writeComment(articleId, userId, text) {
    const body = {
      article: articleId,
      user: userId,
      text
    };

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) throw new Error("Failed to write comment...");
    return res.json();
  }
};