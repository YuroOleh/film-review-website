const API_URL = "http://localhost:3000/newsViews";

export const viewsService = {
  async markAsViewed(newsId, userId) {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newsId, userId })
    });
  },

  async getViewsCount(newsId) {
    const res = await fetch(`${API_URL}?newsId=${newsId}`);
    if (!res.ok) throw new Error("Failed to fetch views");
    const views = await res.json();

    const uniqueUsers = new Set(views.map(v => v.userId));
    return uniqueUsers.size;
  }
};