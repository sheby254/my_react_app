import React from 'react';

interface TaskListProps {
  tasks: Array<{ id: string; title: string; completed: boolean }>;
  onToggle: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle }) => {
  const completedCount = tasks.filter((t) => t.completed).length;

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
                onChange={() => onToggle(task.id)}
              />
              <span className={task.completed ? 'completed' : ''}>{task.title}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
