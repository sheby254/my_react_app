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
    <div className="flex flex-col sm:flex-row justify-between gap-3 mb-4">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        data-testid="search-input"
        className="p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
      />
      <div className="flex gap-1">
        {(['all', 'active', 'completed'] as FilterStatus[]).map((status) => (
          <button
            key={status}
            onClick={() => onFilterChange(status)}
            className={`px-3 py-1.5 text-xs font-medium uppercase rounded border transition-colors ${
              currentFilter === status
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-100'
            }`}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
};