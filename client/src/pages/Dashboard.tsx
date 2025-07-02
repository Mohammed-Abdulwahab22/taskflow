
import { useEffect, useState } from "react";

import AddTaskForm from "../components/AddTaskForm";
import "../styles/Dashboard.css";
import { toast } from "react-toastify";
import { getTasks } from "../api/getTasks";

type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: string;
  tags: string[];
  userId: string;
  createdAt: string;
};

export const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksData = await getTasks();
        setTasks(tasksData);
        setLoading(false);
        console.log("Fetched tasks:", tasksData);
      } catch (err) {
        toast.error("Failed to fetch tasks. Please try again later.");
      } finally {
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="dashboard-page">
      <h2>Welcome to TaskFlow 👋</h2>
      <div className="dashboard-content">
        <div className="add-task-section">
          <AddTaskForm />
        </div>
        <div className="task-list-section">
          {!loading && Array.isArray(tasks) && tasks.length > 0 && (
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  <strong>{task.title}</strong> - {task.status}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
