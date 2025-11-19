const API_URL = "http://localhost:3000/reviews";

export const reviewsService = {
  async getAll(sortBy='date', orderBy='desc', search='') {
    let query = `?_sort=${sortBy}&_order=${orderBy}`;
    if (search) {
      query += `&text_like=${encodeURIComponent(search)}`;
    }

    const res = await fetch(`${API_URL}${query}`);
    if (!res.ok) throw new Error("Films were not found...");
    console.log("FETCHING:", `${API_URL}${query}`);
    return res.json();
  },

  async getById(id) {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Review was not found...");
    return res.json();
  },

  async getReviewsByFilmId(filmId){
    const res = await fetch(`${API_URL}?filmId=${filmId}&_limit=10`);
    if (!res.ok) throw new Error("Reviews were not found...");
    return res.json();
  },

  async writeReview(filmId, userId, text, rating){
    const date = new Date().toISOString().split("T")[0]; 

    const body = {
      filmId,
      userId,
      text,
      rating,
      date,
      likes: 0,
      dislikes: 0
    };

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) throw new Error("Failed to write review...");
    return res.json();
  },

  async calculateRating(filmId) {
    const res = await fetch(`${API_URL}?filmId=${filmId}`);
    if (!res.ok) throw new Error("Reviews were not found...");
    const reviews = await res.json();
    if (!reviews.length) return 0;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return sum / reviews.length;
  }
};