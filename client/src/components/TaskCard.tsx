// TaskCard.tsx
import React from 'react';
import '../styles/TaskCard.css';

type TaskCardProps = {
  title: string;
  description: string;
  priority: string;
  status: string;
  dueDate: string;
  tags: string[];
};

export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  priority,
  status,
  dueDate,
  tags
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
