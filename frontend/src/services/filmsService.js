const API_URL = "http://localhost:3000/films";

export const filmsService = {
  async getAll(sortBy='title', orderBy='asc', search='') {
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
    if (!res.ok) throw new Error("Film was not found...");
    return res.json();
  },

  async getByIds(ids = []) {
      if (!ids.length) return [];
      const query = ids.map(id => `id=${id}`).join('&');

      const res = await fetch(`${API_URL}?${query}`);
      if (!res.ok) throw new Error("Films were not found...");
      return res.json();
  }
};