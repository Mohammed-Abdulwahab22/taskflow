import axios from 'axios';

const API_BASE = "http://localhost:3000/api";

export async function loginUser (email: string, password: string) {
    try {
        const response = await axios.post(`${API_BASE}/auth/login`, { email, password });
        return response.data; 
    } catch (error) {
        console.error("Login failed:", error);
        throw error; 
    }
}   

export async function registerUser(email: string, password: string) {
  const response = await axios.post(`${API_BASE}/auth/register`, {
    email,
    password,
  });

  return response.data; // { token }
}