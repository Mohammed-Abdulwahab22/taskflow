
import { useEffect, useState } from "react";

import AddTaskForm from "../components/AddTaskForm";
import "../styles/Dashboard.css";
import { toast } from "react-toastify";
import { getTasks } from "../api/getTasks";
import { DashboardSidebar } from "../components/DashboardSidebar";
import { TaskCard } from "../components/TaskCard";

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
      <DashboardSidebar/>
    </div>
  );
};
