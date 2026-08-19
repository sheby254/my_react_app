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
    <form onSubmit={handleSubmit} style={{ margin: '1rem 0' }}>
      <input
        type="text"
        placeholder="Enter new task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        data-testid="task-title-input"
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        data-testid="task-priority-select"
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" style={{ padding: '0.5rem 1rem' }}>Add Task</button>
    </form>
  );
};