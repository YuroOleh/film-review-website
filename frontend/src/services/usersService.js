const API = "http://localhost:3000";

export const usersService = {
  async getUser(id) {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    const res = await fetch(`${API}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`User was not found`);
    }

    return res.json();
  },
};