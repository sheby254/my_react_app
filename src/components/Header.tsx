import React from 'react';

interface HeaderProps {
  title: string;
  totalTasks: number;
}

export const Header: React.FC<HeaderProps> = ({ title, totalTasks }) => {
  return (
    <header className="flex-1">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h1>
      <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mt-1">
        Total Tasks: <span data-testid="task-count" className="font-bold text-indigo-600 dark:text-indigo-400">{totalTasks}</span>
      </p>
    </header>
  );
};