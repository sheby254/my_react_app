import React from 'react';

interface HeaderProps {
  title: string;
  totalTasks: number;
}

export const Header: React.FC<HeaderProps> = ({ title, totalTasks }) => {
  return (
    <header className="border-b-2 border-slate-200 pb-4 mb-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
      <p className="text-sm text-slate-600 font-medium">
        Total Tasks: <span data-testid="task-count" className="font-bold text-indigo-600">{totalTasks}</span>
      </p>
    </header>
  );
};