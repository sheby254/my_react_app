import React from 'react';

export type FilterStatus = 'all' | 'active' | 'completed';

interface FilterControlsProps {
  filter?: FilterStatus;
  currentFilter?: FilterStatus;
  searchQuery?: string;
  onFilterChange?: (filter: FilterStatus) => void;
  onSearchChange?: (query: string) => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  filter,
  currentFilter,
  searchQuery = '',
  onFilterChange,
  onSearchChange,
}) => {
  const activeFilter = currentFilter || filter || 'all';

  return (
    <div className="filter-controls">
      {onSearchChange && (
        <input
          type="search"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search tasks"
        />
      )}
      <div role="group" aria-label="Filter tasks">
        {(['all', 'active', 'completed'] as FilterStatus[]).map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange?.(f)}
            aria-pressed={activeFilter === f}
            className={activeFilter === f ? 'active' : ''}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};
