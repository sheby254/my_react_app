import React from 'react';
import type { Task } from '../types/task';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete, onDelete }) => {
  if (tasks.length === 0) {
    return <p className="p-4 text-slate-500 dark:text-slate-400 text-center">No tasks found. Add one above!</p>;
  }

  return (
    <div className="task-list divide-y divide-slate-100 dark:divide-slate-700">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};