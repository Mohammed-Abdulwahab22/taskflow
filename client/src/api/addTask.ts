import axios from 'axios';

const API_BASE = "http://localhost:3000/api";

export async function addTask(
    title: string,
    description: string,
    status: string,
    priority: string,
    dueDate: string,
    tags: string[],
    createdAt: string
) {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("No authentication token found");
        }

        const response = await axios.post(`${API_BASE}/tasks`, {
            title,
            description,
            status,
            priority,
            dueDate,
            tags,
            createdAt
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        return response.data; // { task }
    } catch (error) {
        console.error("Failed to add task:", error);
        throw error; // Propagate the error for handling in the component
    }
}