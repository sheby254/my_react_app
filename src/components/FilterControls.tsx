import React from 'react';

interface FilterControlsProps {
  filter: string;
  searchQuery: string;
  onFilterChange: (filter: string) => void;
  onSearchChange: (query: string) => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  filter,
  searchQuery,
  onFilterChange,
  onSearchChange,
}) => {
  return (
    <div className="filter-controls">
      <input
        type="search"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search tasks"
      />
      <div role="group" aria-label="Filter tasks">
        {['all', 'active', 'completed'].map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            aria-pressed={filter === f}
            className={filter === f ? 'active' : ''}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};
