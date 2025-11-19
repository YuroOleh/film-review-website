const API = "http://localhost:3000";

export const authService = {
  async register(email, password) {
    const res = await fetch(`${API}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password})
    });

    if (!res.ok) {
      throw new Error("Registration failed");
    }

    return res.json();
  },

  async login(email, password) {
    const res = await fetch(`${API}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      throw new Error("Invalid email or password");
    }

    return res.json(); 
  }
};