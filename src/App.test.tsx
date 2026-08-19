import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the header title', () => {
    render(<App />);
    expect(screen.getByText(/Task Tracker/i)).toBeInTheDocument();
  });

  it('renders the add task form', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});