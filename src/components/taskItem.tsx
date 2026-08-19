import React from 'react';
import { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className={`p-3 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50 ${task.completed ? 'bg-slate-50/50 dark:bg-slate-900/30' : ''}`}>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          data-testid={`checkbox-${task.id}`}
          className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
        />
        <span className={`${task.completed ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-700 dark:text-slate-200'}`}>
          {task.title}
        </span>
        <span className="text-xs font-semibold uppercase px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
          {task.priority}
        </span>
      </div>
      <button 
        onClick={() => onDelete(task.id)} 
        data-testid={`delete-${task.id}`}
        className="px-3 py-1 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded transition-colors"
      >
        Delete
      </button>
    </div>
  );
};