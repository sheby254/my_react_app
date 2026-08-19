import React from 'react';

interface HeaderProps {
  title: string;
  totalTasks: number;
}

export const Header: React.FC<HeaderProps> = ({ title, totalTasks }) => {
  return (
    <header className="header" style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <h1>{title}</h1>
      <p>Total Tasks: <span data-testid="task-count">{totalTasks}</span></p>
    </header>
  );
};