// TaskCard.tsx
import React from 'react';
import '../styles/TaskCard.css';

type TaskCardProps = {
  id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  dueDate: string;
  tags: string[];
  onDelete: (id: string) => void;
};
export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  priority,
  status,
  dueDate,
  tags,
  onDelete,
  id,
}) => {
  return (
    <div className={`task-card priority-${priority.toLowerCase()} status-${status.toLowerCase()}`}>
      <div className="task-card-header">
        <h3 className="task-title">{title}</h3>
        <span className="task-status">{status}</span>
      </div>
      <p className="task-description">{description || "No description"}</p>
      <div className="task-footer">
        <span className="task-priority">Priority: {priority}</span>
        <span className="task-due-date">Due: {dueDate}</span>
        <button className="done-button" onClick={() => onDelete(id)}>
          Mark as Done
        </button>
      </div>
      {tags.length > 0 && (
        <div className="task-tags">
          {tags.map((tag, index) => (
            <span key={index} className="task-tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};
