import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from './Header';

describe('Header Component', () => {
  it('renders the title and task count correctly', () => {
    render(<Header title="Task Dashboard" totalTasks={5} />);
    
    expect(screen.getByText('Task Dashboard')).toBeInTheDocument();
    expect(screen.getByTestId('task-count')).toHaveTextContent('5');
  });
});