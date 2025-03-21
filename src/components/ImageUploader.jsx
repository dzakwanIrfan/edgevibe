function ImageUploader({ setImageSrc }) {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Upload Your Image</h3>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-base file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-all duration-200"
      />
    </div>
  );
}

export default ImageUploader;