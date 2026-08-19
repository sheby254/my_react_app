import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Header } from './components/Header';
import { AddTaskForm } from './components/AddTaskForm';
import type { Priority } from './components/AddTaskForm';
import { TaskList } from './components/TaskList';
import { FilterControls } from './components/FilterControls';
import type { FilterStatus } from './components/FilterControls';
import { DarkModeToggle } from './components/DarkModeToggle';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority?: Priority;
}

export function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('darkMode', false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleAddTask = (title: string, priority?: Priority) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      priority: priority || 'medium',
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleToggle = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks
    .filter((t) => {
      if (filter === 'active') return !t.completed;
      if (filter === 'completed') return t.completed;
      return true;
    })
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <div className="max-w-2xl mx-auto p-4 space-y-6">
        <div className="flex items-center justify-between">
          <Header title="Task Tracker" totalTasks={tasks.length} completedTasks={completedCount} />
          <DarkModeToggle 
            darkMode={darkMode} 
            onToggle={() => setDarkMode((prev) => !prev)} 
          />
        </div>
        <AddTaskForm onAddTask={handleAddTask} onAdd={(t) => handleAddTask(t, 'medium')} />
        <FilterControls
          filter={filter}
          currentFilter={filter}
          searchQuery={search}
          onFilterChange={setFilter}
          onSearchChange={setSearch}
        />
        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggle}
          onToggleComplete={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;