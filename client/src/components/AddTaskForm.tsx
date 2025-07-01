import React,{useState} from "react";
import "../styles/AddTaskForm.css";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [status, setStatus] = useState("pending");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState(new Date().toISOString().split("T")[0]); 
  const [tags, setTags] = useState<string[]>([]);
  // const [createdAt, setCreatedAt] = useState(new Date().toISOString());

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
        <input type="date" />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
