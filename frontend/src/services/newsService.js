const API_URL = "http://localhost:3000/news";

export const newsService = {
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
    if (!res.ok) throw new Error("Article was not found...");
    return res.json();
  }
};