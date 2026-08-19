import React from 'react';

export interface HeaderProps {
  title?: string;
  totalTasks?: number;
  completedTasks?: number;
  [key: string]: any;
}

export const Header: React.FC<HeaderProps> = ({
  title = 'Task Tracker',
  totalTasks = 0,
  completedTasks = 0,
}) => {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <div className="badge" aria-label="Task metrics">
        <span>{completedTasks}/{totalTasks} Done</span>
      </div>
    </header>
  );
};