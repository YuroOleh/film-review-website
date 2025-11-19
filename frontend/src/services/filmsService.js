const API_URL = "http://localhost:3000/films";

export const filmsService = {
  async getAll(sortBy='title', orderBy='asc') {
    const sort = orderBy === 'desc' ? `-${sortBy}` : sortBy;
    const res = await fetch(API_URL + "?_sort=" + sort);
    if (!res.ok) throw new Error("Films were not found...");
    console.log("FETCHING: " + API_URL + "?_sort=" + sortBy + "&_order=" + orderBy);
    return res.json();
  },

  async getById(id) {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Film was not found...");
    return res.json();
  }
};