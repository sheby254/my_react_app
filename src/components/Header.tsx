import React from 'react';

interface HeaderProps {
  totalTasks: number;
  completedTasks: number;
}

export const Header: React.FC<HeaderProps> = ({ totalTasks, completedTasks }) => {
  return (
    <header className="app-header">
      <h1>Task Tracker</h1>
      <div className="badge" aria-label="Task metrics">
        <span>{completedTasks}/{totalTasks} Done</span>
      </div>
    </header>
  );
};
