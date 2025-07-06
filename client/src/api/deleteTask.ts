import axios from 'axios';

const API_BASE = "http://localhost:3000/api";

export async function deleteTask(id: string) {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token");

  await axios.delete(`${API_BASE}/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
