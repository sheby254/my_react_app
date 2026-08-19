import React from 'react';

export interface TaskItemProps {
  id?: string;
  title?: string;
  completed?: boolean;
  priority?: 'low' | 'medium' | 'high';
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
  [key: string]: any;
}

export const TaskItem: React.FC<TaskItemProps> = (props) => {
  const id = props.id || '';
  const title = props.title || '';
  const completed = Boolean(props.completed);
  const priority = props.priority || 'medium';

  return (
    <li className={`task-item priority-${priority}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.onToggle && props.onToggle(id)}
        aria-label={`Toggle ${title}`}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {title}
      </span>
      {props.onDelete && (
        <button
          onClick={() => props.onDelete && props.onDelete(id)}
          className="delete-btn"
        >
          Delete
        </button>
      )}
    </li>
  );
};