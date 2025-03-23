function FilterButton({ filterKey, activeFilter, isLoading, onClick, label }) {
    return (
      <button
        onClick={() => onClick(filterKey)}
        disabled={isLoading}
        className={`px-4 py-2 rounded text-sm font-medium ${
          isLoading
            ? 'bg-gray-300 cursor-not-allowed'
            : activeFilter === filterKey
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        {isLoading ? 'Loading...' : label}
      </button>
    );
  }
  
  export default FilterButton;