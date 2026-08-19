import { useState } from 'react';
import { Task, Priority } from './types/task';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Header } from './components/Header';
import { AddTaskForm } from './components/AddTaskForm';
import { FilterControls, FilterStatus } from './components/FilterControls';
import { TaskList } from './components/TaskList';

export function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks_data', []);
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');

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
    <div className="min-h-screen bg-slate-100 text-slate-800 p-4 font-sans">
      <div className="max-w-2xl mx-auto my-12 p-8 bg-white rounded-lg shadow-md border border-slate-200">
        <Header title="React Task Manager" totalTasks={tasks.length} />
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