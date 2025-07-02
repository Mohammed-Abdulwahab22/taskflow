import axios from "axios";

const API_BASE = "http://localhost:3000/api";

export async function getTasks() {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_BASE}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data; 
}
