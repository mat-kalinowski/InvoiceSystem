import API from "../api";
const GROUP_DEFAULT_URL = "auth";

export const login = async (payload) => {
  return await API.post(`${GROUP_DEFAULT_URL}/signin`, payload);
};
