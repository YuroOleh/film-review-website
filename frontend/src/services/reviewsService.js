const API_URL = import.meta.env.VITE_API_URL + "reviews/";

export const reviewsService = {
  async getAll(sortBy = "date", orderBy = "desc", search = "", page = 1, pageSize = 6, userId = "", filmId = "") {
    let query = `?ordering=${orderBy === "desc" ? "-" + sortBy : sortBy}&page=${page}&page_size=${pageSize}`;

    if (search) query += `&text=${encodeURIComponent(search)}`;
    if (userId) query += `&userId=${userId}`;
    if (filmId) query += `&filmId=${filmId}`;

    const res = await fetch(`${API_URL}${query}`, { method: "GET", credentials: "include" });
    if (!res.ok) throw new Error("Reviews were not found...");
    return res.json();
  },

  async getById(id) {
    const res = await fetch(`${API_URL}${id}/`, {
      method: "GET",
      credentials: "include",
    });
    if (!res.ok) throw new Error("Review was not found...");
    return res.json();
  },

  async writeReview(filmId, userId, text, rating) {
    const body = { film: filmId, user: userId, text, rating, likes: 0, dislikes: 0 };
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Failed to write review...");
    }
    return res.json();
  },

  async getReviewsByFilmId(filmId) {
    const res = await fetch(`${API_URL}?filmId=${filmId}&ordering=-date`, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) throw new Error("Reviews were not found...");
    return res.json();
  },

  async calculateRating(filmId) {
    const data = await this.getReviewsByFilmId(filmId); 
    const reviews = data.results || []; 
    if (!reviews.length) return 0;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return sum / reviews.length;
  }
};