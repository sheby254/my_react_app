import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TaskList } from './TaskList';

describe('TaskList Accessibility', () => {
  it('renders status region with correct completion text', () => {
    const tasks = [
      { id: '1', title: 'Task 1', completed: true },
      { id: '2', title: 'Task 2', completed: false },
    ];
    render(<TaskList tasks={tasks} onToggle={vi.fn()} />);
    const status = screen.getByRole('status');
    expect(status).toHaveTextContent('1 of 2 tasks completed');
  });
});
