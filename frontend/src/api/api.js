import axios from "axios";
import store from "./store";

const headers = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
  "Access-Control-Allow-Headers": "Content-Type",
  Accept: "application/json",
};

const API = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND_URL,
  headers: headers,
});

API.interceptors.request.use(
  (config) => {
    const token = store.getToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      store.logOut();
      window.location = "/login";
    } else if (error.response.status === 403) {
      store.logOut();
      window.location = "/login";
    } else {
      throw new Error(error.response.data.message);
    }
  },
  (response) => response
);

export default API;
