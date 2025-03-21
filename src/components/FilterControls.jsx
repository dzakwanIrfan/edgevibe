import { useState } from "react";

function FilterControls({ setSelectedFilter, isLoading, setIsLoading }) {
  const [activeFilter, setActiveFilter] = useState('none');

  const filters = {
    none: null,
    emboss: [
      [-2, -1, 0],
      [-1, 1, 1],
      [0, 1, 2]
    ],
    highPass: [
      [-1, -1, -1],
      [-1, 8, -1],
      [-1, -1, -1]
    ],
    lowPass: [
      [1/9, 1/9, 1/9],
      [1/9, 1/9, 1/9],
      [1/9, 1/9, 1/9]
    ]
  };

  const handleFilterClick = (filterKey) => {
    setActiveFilter(filterKey);
    setIsLoading(true);
    setTimeout(() => {
      setSelectedFilter(filters[filterKey]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Filter Magic</h3>
      <div className="flex flex-wrap gap-3">
        {Object.keys(filters).map((filterKey) => (
          <button
            key={filterKey}
            onClick={() => handleFilterClick(filterKey)}
            disabled={isLoading}
            className={`relative px-6 py-3 text-base font-semibold rounded-md transition-all duration-200 ${
              isLoading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : activeFilter === filterKey
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900 hover:bg-blue-600 hover:text-white'
            }`}
          >
            {isLoading && activeFilter === filterKey ? 'Processing...' : filterKey === 'none' ? 'No Filter' : filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
            {activeFilter === filterKey && !isLoading}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterControls;