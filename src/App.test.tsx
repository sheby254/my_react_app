import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import App from './App';

describe('App Integration', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('allows users to add a task and displays it in the list', () => {
    render(<App />);

    const input = screen.getByTestId('task-title-input');
    const submitBtn = screen.getByRole('button', { name: /add task/i });

    fireEvent.change(input, { target: { value: 'Buy groceries' } });
    fireEvent.click(submitBtn);

    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.getByTestId('task-count')).toHaveTextContent('1');
  });
});