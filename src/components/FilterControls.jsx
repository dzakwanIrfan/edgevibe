import { useState } from "react";
import FilterButton from "./FilterButton";

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
    ],
    gaussianBlur: [
      [1/16,  2/16,  1/16],
      [2/16,  4/16,  2/16],
      [1/16,  2/16,  1/16]
    ],
    sharpen: [
      [0, -1, 0],
      [-1, 5, -1],
      [0, -1, 0]
    ],  
    sobelHorizontal: [
      [-1, 0,   1],
      [-2, 0,   2],
      [-1, 0,   1]
    ],
    sobelVertical: [
      [-1, -2, -1],
      [ 0, 0, 0],
      [ 1, 2, 1]
    ],
    laplacian: [
      [0, -1, 0],
      [-1, 4, -1],
      [0, -1, 0]
    ],
    prewittHorizontal: [
      [-1, 0, 1],
      [-1, 0, 1],
      [-1, 0, 1]
    ],
    prewittVertical: [
      [1, 1, 1],
      [0, 0, 0],
      [-1, -1, -1]
    ],
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
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Filters</h3>
      <div className="flex flex-wrap gap-2">
        <FilterButton
          filterKey="none"
          activeFilter={activeFilter}
          isLoading={isLoading}
          onClick={handleFilterClick}
          label="No Filter"
        />
        <FilterButton
          filterKey="emboss"
          activeFilter={activeFilter}
          isLoading={isLoading}
          onClick={handleFilterClick}
          label="Emboss"
        />
        <FilterButton
          filterKey="highPass"
          activeFilter={activeFilter}
          isLoading={isLoading}
          onClick={handleFilterClick}
          label="High Pass"
        />
        <FilterButton
          filterKey="lowPass"
          activeFilter={activeFilter}
          isLoading={isLoading}
          onClick={handleFilterClick}
          label="Low Pass"
        />
        <FilterButton
          filterKey="gaussianBlur"
          activeFilter={activeFilter}
          isLoading={isLoading}
          onClick={handleFilterClick}
          label="Gaussian Blur"
        />
        <FilterButton
          filterKey="sharpen"
          activeFilter={activeFilter}
          isLoading={isLoading}
          onClick={handleFilterClick}
          label="Sharpen"
        />
        <FilterButton
          filterKey="sobelHorizontal"
          activeFilter={activeFilter}
          isLoading={isLoading}
          onClick={handleFilterClick}
          label="Sobel Horizontal"
        />
        <FilterButton
          filterKey="sobelVertical"
          activeFilter={activeFilter}
          isLoading={isLoading}
          onClick={handleFilterClick}
          label="Sobel Vertical"
        />
        <FilterButton
          filterKey="laplacian"
          activeFilter={activeFilter}
          isLoading={isLoading}
          onClick={handleFilterClick}
          label="Laplacian"
        />
        <FilterButton
          filterKey="prewittHorizontal"
          activeFilter={activeFilter}
          isLoading={isLoading}
          onClick={handleFilterClick}
          label="Prewitt Horizontal"
        />
        <FilterButton
          filterKey="prewittVertical"
          activeFilter={activeFilter}
          isLoading={isLoading}
          onClick={handleFilterClick}
          label="Prewitt Vertical"
        />
      </div>
    </div>
  );
}

export default FilterControls;