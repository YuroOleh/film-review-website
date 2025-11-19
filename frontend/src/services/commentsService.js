const API_URL = "http://localhost:3000/comments";

export const commentsService = {
  async getAll(articleId) {
    const res = await fetch(`${API_URL}?articleId=${articleId}&_sort=date&_order=asc`);
    if (!res.ok) throw new Error("Comments were not found...");
    return res.json();
  },

  async getById(id) {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Comment was not found...");
    return res.json();
  },

  async writeComment(articleId, userId, text) {
    const date = new Date().toISOString().split("T")[0]; 

    const body = {
      articleId,
      userId,
      text,
      date
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