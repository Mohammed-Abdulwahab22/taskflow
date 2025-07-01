import React,{useState} from "react";
import "../styles/AddTaskForm.css";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState(new Date().toISOString().split("T")[0]); 
  const [tags, setTags] = useState<string[]>([]);
  const [createdAt, setCreatedAt] = useState(new Date().toISOString());

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic to handle form submission
  };

  return (
    <div className="add-task-form">
      <h3 className="form-title">Add New Task</h3>
      <form>
        <label>Title</label>
        <input type="text" placeholder="Task title" />

        <label>Description</label>
        <textarea placeholder="Optional description"></textarea>

        <label>Due Date</label>
        <input type="date" />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
