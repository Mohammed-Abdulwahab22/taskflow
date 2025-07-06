
import { useEffect, useState } from "react";

import AddTaskForm from "../components/AddTaskForm";
import "../styles/Dashboard.css";
import { toast } from "react-toastify";
import { getTasks } from "../api/getTasks";
import { DashboardSidebar } from "../components/DashboardSidebar";
import { TaskCard } from "../components/TaskCard";
import { deleteTask } from "../api/deleteTask";

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

  const handleDelete = async (taskId: string) => {
    try {
      await deleteTask(taskId);
      setTasks((prev) => prev.filter((t) => t.id !== taskId));
      toast.success("Task marked as done and removed!");
    } catch {
      toast.error("Failed to delete task.");
    }
  };


  return (
    <div className="dashboard-page">
      <DashboardSidebar onTaskAdded={(newTask) => setTasks(prev => [newTask, ...prev])} />
      <div className="task-list-section">
        {loading && <p>Loading tasks...</p>}
        {!loading && tasks.length === 0 && <p>No tasks yet. Add your first task!</p>}
        {!loading && tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            status={task.status}
            dueDate={task.dueDate}
            tags={task.tags}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
