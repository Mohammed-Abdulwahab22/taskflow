import React, { useState } from "react";
import { toast } from "react-toastify";

import { addTask } from "../api/addTask";
import "../styles/AddTaskForm.css";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState(new Date().toISOString().split("T")[0]);
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const createdAt = new Date().toISOString();
      const status = "todo"; 

      await addTask(title, description, status, priority, dueDate, tags, createdAt);
      toast.success("Task added successfully!");

      setTitle("");
      setDescription("");
      setPriority("medium");
      setDueDate(new Date().toISOString().split("T")[0]);
      setTags([]);
    } catch (err) {
      toast.error("Failed to add task.");
    }


  };

  return (
    <div className="add-task-form">
      <h3 className="form-title">Add New Task</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description</label>
        <textarea
          placeholder="Optional description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label>Priority</label>
        <select className="priority-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium" selected>Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>

        <label>Tags</label>
        <input
          type="text"
          placeholder="Add tags (comma separated)"
          onChange={(e) => setTags(e.target.value.split(",").map(tag => tag.trim()))}
        />

        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
        />

        <button type="submit" >Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
