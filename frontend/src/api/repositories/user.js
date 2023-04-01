import API from "../api";
// const queryString = require("query-string");
const GROUP_DEFAULT_URL = "user";

export const login = async (payload) => {
  return await API.post(`${GROUP_DEFAULT_URL}/login`, payload);
};

export const getUsers = async () => {
  return await API.get(`${GROUP_DEFAULT_URL}`);
};

export const createUser = async (paylaod) => {
  return await API.post(`${GROUP_DEFAULT_URL}`, paylaod);
};

export const updateUser = async (_id, paylaod) => {
  return await API.patch(`${GROUP_DEFAULT_URL}/${_id}`, paylaod);
};
