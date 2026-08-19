import React from 'react';

interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  id,
  title,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
        aria-label={Mark "" as }
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {title}
      </span>
      <button
        onClick={() => onDelete(id)}
        aria-label={Delete task ""}
        className="delete-btn"
      >
        Delete
      </button>
    </li>
  );
};
