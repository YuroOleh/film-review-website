const API_URL = import.meta.env.VITE_API_URL + "news/views/";

export const viewsService = {
  async markAsViewed(newsId, userId) {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ article: newsId, user: userId })
    });
  },

  async getViewsCount(newsId) {
    const res = await fetch(`${API_URL}?articleId=${newsId}`);
    if (!res.ok) throw new Error("Failed to fetch views");
    const views = await res.json();

    const uniqueUsers = new Set(views.map(v => v.user));
    return uniqueUsers.size;
  }
};