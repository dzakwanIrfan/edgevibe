function GeometricControls({ translateX, translateY, setTranslateX, setTranslateY }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Geometric Playground</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-base font-medium text-gray-900 mb-2">
              Shift X: <span className="text-blue-600">{translateX}px</span>
            </label>
            <input
              type="range"
              min="-200"
              max="200"
              value={translateX}
              onChange={(e) => setTranslateX(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-900 mb-2">
              Shift Y: <span className="text-blue-600">{translateY}px</span>
            </label>
            <input
              type="range"
              min="-200"
              max="200"
              value={translateY}
              onChange={(e) => setTranslateY(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default GeometricControls;