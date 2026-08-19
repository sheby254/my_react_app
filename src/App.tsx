import { useEffect, useState } from 'react';
import type { Task, Priority } from './types/task';
import type { FilterStatus } from './components/FilterControls';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Header } from './components/Header';
import { AddTaskForm } from './components/AddTaskForm';
import { FilterControls } from './components/FilterControls';
import { TaskList } from './components/TaskList';
import { DarkModeToggle } from './components/DarkModeToggle';

export function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks_data', []);
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('dark_mode', false);
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleAddTask = (title: string, priority: Priority) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description: '',
      completed: false,
      priority,
      category: 'General',
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleToggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === 'all'
        ? true
        : filter === 'active'
        ? !task.completed
        : task.completed;
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100 p-4 font-sans transition-colors duration-200">
      <div className="max-w-2xl mx-auto my-12 p-8 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center mb-6">
          <Header title="React Task Manager" totalTasks={tasks.length} />
          <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        </div>
        <AddTaskForm onAddTask={handleAddTask} />
        <FilterControls
          currentFilter={filter}
          onFilterChange={setFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <TaskList
          tasks={filteredTasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;