const API_URL = import.meta.env.VITE_API_URL + "discussions/";

export const discussionsService = {
  async getAll(sortBy = 'created_at', orderBy = 'asc', search = '', page = 1) {
    let query = `?ordering=${orderBy === 'desc' ? '-' + sortBy : sortBy}`;

    if (search) {
      query += `&search=${encodeURIComponent(search)}`;
    }

    query += `&page=${page}`;

    const res = await fetch(`${API_URL}${query}`);
    if (!res.ok) throw new Error("Discussions were not found...");
    return res.json();
  },

  async getById(id) {
    const res = await fetch(`${API_URL}${id}/`);
    if (!res.ok) throw new Error("Discussion was not found...");
    return res.json();
  },

  async createDiscussion(filmId, userId, title) {
    const body = {
      film: filmId,
      user: userId,
      title
    };

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) throw new Error("Failed to create discussion...");
    return res.json();
  },

  async getDiscussionsByFilmId(filmId) {
    const res = await fetch(`${API_URL}?filmId=${filmId}&ordering=-created_at`);
    if (!res.ok) throw new Error("Discussions were not found...");
    return res.json();
  }
};