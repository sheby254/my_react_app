import React from 'react';
import { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div 
      className={`task-item ${task.completed ? 'completed' : ''}`}
      style={{ padding: '0.75rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}
    >
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          data-testid={`checkbox-${task.id}`}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none', marginLeft: '0.5rem' }}>
          {task.title}
        </span>
        <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem', color: '#666' }}>
          [{task.priority.toUpperCase()}]
        </span>
      </div>
      <button onClick={() => onDelete(task.id)} data-testid={`delete-${task.id}`}>
        Delete
      </button>
    </div>
  );
};