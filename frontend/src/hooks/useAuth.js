import { authService } from "../services/authService";

export function useAuth() {
  async function login(email, password) {
    const data = await authService.login(email, password);
    localStorage.setItem("token", data.accessToken);
    
    console.log(data.accessToken)
    const res = await fetch(`http://localhost:3000/users?email=${email}`, {
      headers: { Authorization: `Bearer ${data.accessToken}`, "Content-Type": "application/json" },
    });

    const users = await res.json();

    const user = users[0];

    localStorage.setItem("user", JSON.stringify(user));
  }

  async function register(email, password, fullName) {
    const data = await authService.register(email, password);

    const res = await fetch(`http://localhost:3000/users?email=${email}`, {
      headers: { Authorization: `Bearer ${data.accessToken}`, "Content-Type": "application/json" },
    });

    const users = await res.json();

    const userId = users[0].id;

    await fetch(`http://localhost:3000/users/${userId}`, {
      method: "PATCH",
      headers: {  Authorization: `Bearer ${data.accessToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ fullName })
    });
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return { login, register, logout };
}