const API = import.meta.env.VITE_API_URL + "authentication";

export const authService2 = {
  async register(email, username, password) {
    const res = await fetch(`${API}/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, username, password })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Registration failed");
    }

    return res.json();
  },

  async login(email, password) {
    const res = await fetch(`${API}/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Invalid email or password");
    }

    return res.json();
  },

  async logout() {
    const res = await fetch(`${API}/logout/`, {
      method: "POST",
      credentials: "include"
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Logout failed");
    }

    return res.json();
  },

  async getMe() {
    const res = await fetch(`${API}/me/`, {
      method: "GET",
      credentials: "include"
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Not authenticated");
    }

    return res.json();
  },

  async user(id) {
    const res = await fetch(`${API}/user/${id}`, {
      method: "GET",
      credentials: "include"
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Not authenticated");
    }

    return res.json();
  },
};
