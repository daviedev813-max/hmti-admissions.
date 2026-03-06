import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

export const submitApplication = async (formData) => {
  const response = await API.post("/api/applications", formData);
  return response.data;
};