import axios from "axios";

const API = axios.create({
  baseURL: "https://lmssitebackend.onrender.com/api/auth",
  withCredentials: true,
});

export const registerUser = (formData) =>
  API.post("/register", formData);

export const loginUser = (data) =>
  API.post("/login", data);
