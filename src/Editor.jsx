import { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ImagePreview from './components/ImagePreview';
import GeometricControls from './components/GeometricControls';
import FilterControls from './components/FilterControls';
import Header from './components/Header';

function Editor() {
  const [imageSrc, setImageSrc] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="overflow-x-hidden">
      <Header />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-6">
            <ImageUploader setImageSrc={setImageSrc} />
            {imageSrc && (
              <>
                <GeometricControls
                  translateX={translateX}
                  translateY={translateY}
                  setTranslateX={setTranslateX}
                  setTranslateY={setTranslateY}
                />
                <FilterControls
                  setSelectedFilter={setSelectedFilter}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </>
            )}
          </div>
          <ImagePreview
            imageSrc={imageSrc}
            translateX={translateX}
            translateY={translateY}
            selectedFilter={selectedFilter}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>
  );
}

export default Editor;