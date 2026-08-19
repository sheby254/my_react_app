import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TaskItem } from './TaskItem';

describe('TaskItem Component', () => {
  it('triggers onDelete when delete button is clicked', () => {
    const handleDelete = vi.fn();
    render(
      <TaskItem
        id="1"
        title="Buy Milk"
        completed={false}
        onToggle={vi.fn()}
        onDelete={handleDelete}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /delete task "buy milk"/i }));
    expect(handleDelete).toHaveBeenCalledWith('1');
  });
});
