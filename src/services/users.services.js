import http from "../http.common";

class UsersDataService {
  login(username, password) {
    return http.post("/auth/login", username, password);
  }

  logout() {
    localStorage.removeItem("userId");
  }

  register() {
    return http.post("/auth/register");
  }

  getCurrentUser = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        return null;
      }

      return userId;
    } catch (error) {
      console.error("Error getting current user:", error);
      throw error;
    }
  };
}

export default new UsersDataService();
