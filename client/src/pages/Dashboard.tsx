import "../styles/Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h2>Welcome to TaskFlow 👋</h2>
      <div className="dashboard-content">
        <div className="add-task-section">
          {/* AddTaskForm will go here */}
        </div>
        <div className="task-list-section">
          {/* TaskList will go here */}
        </div>
      </div>
    </div>
  );
};
