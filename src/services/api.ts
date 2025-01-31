import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const api = axios.create({
  baseURL: process.env.BASE_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
