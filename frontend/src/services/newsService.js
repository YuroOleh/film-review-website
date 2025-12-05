const API_URL = import.meta.env.VITE_API_URL + "news/";

export const newsService = {
  async getAll(sortBy='title', orderBy='asc', search='', page = 1, pageSize = 6) {
    let query = `?page=${page}&ordering=${orderBy === 'asc' ? '' : '-'}${sortBy}`;

    if (search) {
      query += `&search=${encodeURIComponent(search)}`;
    }

    if (pageSize) {
      query += `&page_size=${pageSize}`;
    }

    const res = await fetch(`${API_URL}${query}`);
    if (!res.ok) throw new Error("News not found...");
    return res.json();   
  },

  async getById(id) {
    const res = await fetch(`${API_URL}${id}/`);
    if (!res.ok) throw new Error("Article was not found...");
    return res.json();
  }
};