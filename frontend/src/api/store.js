import api from "./api";

class Store {
  parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  setTokens(token, refreshToken) {
    localStorage.setItem("token", token);
    localStorage.setItem("refresh", refreshToken);
    this.setUser(token);
  }

  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
  }

  setUser(token) {
    const user = this.parseJwt(token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getRefreshToken() {
    return localStorage.getItem("refresh");
  }
}

export default new Store();
