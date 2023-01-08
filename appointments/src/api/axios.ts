import axios from "axios";

const BASE_URL = "http://localhost:3000";

const accessToken = '';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`
  },
});
