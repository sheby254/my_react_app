import React from 'react';

interface TaskListProps {
  tasks: Array<{ id: string; title: string; completed: boolean }>;
  onToggle?: (id: string) => void;
  onToggleComplete?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggle,
  onToggleComplete,
  onDelete,
}) => {
  const completedCount = tasks.filter((t) => t.completed).length;
  const handleToggle = (id: string) => {
    if (onToggleComplete) onToggleComplete(id);
    else if (onToggle) onToggle(id);
  };

  return (
    <div>
      <div role="status" aria-live="polite" className="sr-only">
        {completedCount} of {tasks.length} tasks completed
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <span className={task.completed ? 'completed' : ''}>{task.title}</span>
            </label>
            {onDelete && (
              <button onClick={() => onDelete(task.id)} className="delete-btn">
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
