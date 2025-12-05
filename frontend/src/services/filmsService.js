const API_URL = import.meta.env.VITE_API_URL + "films/";

export const filmsService = {
  async getAll(sortBy = 'title', orderBy = 'asc', search = '', page = 1, pageSize = 1) {
    let query = `?page=${page}&ordering=${orderBy === 'asc' ? '' : '-'}${sortBy}`;

    if (search) {
      query += `&search=${encodeURIComponent(search)}`;
    }
    if (pageSize) {
      query += `&page_size=${pageSize}`;
    }

    const res = await fetch(`${API_URL}${query}`);
    if (!res.ok) throw new Error("Films were not found...");
    return res.json();
  },

  async getById(id) {
    const res = await fetch(`${API_URL}${id}/`);
    if (!res.ok) throw new Error("Film was not found...");
    return res.json();
  },

  async getByIds(ids = []) {
    if (!ids.length) return [];
    const promises = ids.map(id => this.getById(id));
    return Promise.all(promises);
  }
};