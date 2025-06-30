import React from "react";

const AddTaskForm = () => {
  return (
    <div>
      <h3>Add New Task</h3>
      <form>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Description"></textarea>
        <input type="date" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
