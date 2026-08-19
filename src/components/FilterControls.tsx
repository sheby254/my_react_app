import React from 'react';

export type FilterStatus = 'all' | 'active' | 'completed';

interface FilterControlsProps {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  currentFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="filter-controls" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        data-testid="search-input"
        style={{ padding: '0.4rem' }}
      />
      <div>
        {(['all', 'active', 'completed'] as FilterStatus[]).map((status) => (
          <button
            key={status}
            onClick={() => onFilterChange(status)}
            style={{
              padding: '0.4rem 0.8rem',
              marginLeft: '0.25rem',
              fontWeight: currentFilter === status ? 'bold' : 'normal',
            }}
          >
            {status.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};