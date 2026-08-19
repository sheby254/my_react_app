import { useState } from 'react';
import { Header } from './components/Header';
import { AddTaskForm } from './components/AddTaskForm';
import type { Priority } from './components/AddTaskForm';
import { TaskList } from './components/TaskList';
import { FilterControls } from './components/FilterControls';
import type { FilterStatus } from './components/FilterControls';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority?: Priority;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [search, setSearch] = useState('');

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
    <div className="app-container">
      <Header title="Task Tracker" totalTasks={tasks.length} completedTasks={completedCount} />
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
  );
}

export default App;