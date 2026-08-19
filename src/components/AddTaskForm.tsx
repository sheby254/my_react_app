import React, { useState } from 'react';
import { Priority } from '../types/task';

interface AddTaskFormProps {
  onAddTask: (title: string, priority: Priority) => void;
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title, priority);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <input
        type="text"
        placeholder="Enter new task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        data-testid="task-title-input"
        className="flex-1 p-2 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        data-testid="task-priority-select"
        className="p-2 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button 
        type="submit" 
        className="px-4 py-2 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
      >
        Add Task
      </button>
    </form>
  );
};