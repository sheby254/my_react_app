import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AddTaskForm } from './AddTaskForm';

describe('AddTaskForm Component', () => {
  it('calls onAddTask with input values and resets the form on submit', () => {
    const handleAddTask = vi.fn();
    render(<AddTaskForm onAddTask={handleAddTask} />);

    const input = screen.getByTestId('task-title-input');
    const select = screen.getByTestId('task-priority-select');
    const submitButton = screen.getByRole('button', { name: /add task/i });

    fireEvent.change(input, { target: { value: 'New Test Task' } });
    fireEvent.change(select, { target: { value: 'high' } });
    fireEvent.click(submitButton);

    expect(handleAddTask).toHaveBeenCalledWith('New Test Task', 'high');
    expect(input).toHaveValue('');
  });
});