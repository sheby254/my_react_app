import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TaskItem } from './TaskItem';
import { Task } from '../types/task';

const mockTask: Task = {
  id: '1',
  title: 'Test Task',
  description: 'Test description',
  completed: false,
  priority: 'high',
  category: 'General',
  createdAt: '2026-08-19',
};

describe('TaskItem Component', () => {
  it('renders task title and fires completion callback when checkbox clicked', () => {
    const handleToggle = vi.fn();
    const handleDelete = vi.fn();

    render(
      <TaskItem 
        task={mockTask} 
        onToggleComplete={handleToggle} 
        onDelete={handleDelete} 
      />
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
    
    const checkbox = screen.getByTestId('checkbox-1');
    fireEvent.click(checkbox);
    expect(handleToggle).toHaveBeenCalledWith('1');
  });
});