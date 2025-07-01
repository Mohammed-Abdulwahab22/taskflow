import React from "react";
import "../styles/AddTaskForm.css";

const AddTaskForm = () => {
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
