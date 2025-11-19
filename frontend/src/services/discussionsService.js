const API_URL = "http://localhost:3000/discussions";

export const discussionsService = {
  async getAll(sortBy='date', orderBy='asc', search='') {
    let query = `?_sort=${sortBy}&_order=${orderBy}`;
    if (search) {
      query += `&title_like=${encodeURIComponent(search)}`;
    }

    const res = await fetch(`${API_URL}${query}`);
    if (!res.ok) throw new Error("Films were not found...");
    console.log("FETCHING:", `${API_URL}${query}`);
    return res.json();
  },

  async getById(id) {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Discussion was not found...");
    return res.json();
  },

  async getDiscussionsByFilmId(filmId){
    const res = await fetch(`${API_URL}?filmId=${filmId}&_sort=-commentaries&_limit=10`);
    if (!res.ok) throw new Error("Discussions were not found...");
    return res.json();
  },

  async createDiscussion(filmId, userId, title){
    const date = new Date().toISOString().split("T")[0]; 

    const body = {
      filmId,
      userId,
      title,
      date,
      commentaries: 0,
      users: 0
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
  }
};