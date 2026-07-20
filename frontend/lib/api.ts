
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  timeout: 30000,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("mv_token");
    if (token) {
  config.headers.Authorization = `Bearer ${token}`;
}
  }
  return config;
});

export const endpoints = {
  parse: "/parse",
  scene: "/scene",
  solve: "/solve",
  explain: "/explain",
  drawInterpret: "/draw/interpret",
  drawAssist: "/draw/assist",
  ocr: "/ocr",
  history: "/history",
  auth: { login: "/auth/login", register: "/auth/register", me: "/auth/me" },
};
