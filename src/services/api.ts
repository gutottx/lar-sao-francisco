import axios from "axios";

export const api = axios.create({
  baseURL: "https://lar-sao-francisco.onrender.com/api/v1",
});