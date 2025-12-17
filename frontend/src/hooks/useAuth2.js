import { authService2 } from "../services/authService2";

export function useAuth2() {

  async function login(email, password) {

    await authService2.login(email, password);
  }

  async function register(email, password, fullName) {
    await authService2.register(email, fullName, password);
  }

  async function logout() {
    await authService2.logout();
  }

  async function getCurrentUser() {
    try {
      const user = await authService2.getMe();
      return user;
    } catch {
      return null;
    }
  }

  return { login, register, logout, getCurrentUser };
}
