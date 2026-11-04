import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACK_END_URL;

export const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});
