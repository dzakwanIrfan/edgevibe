import { useRef } from 'react';

function ImagePreview({ imageSrc, translateX, translateY, selectedFilter, isLoading }) {
  const canvasRef = useRef(null);

  const applyFilter = (context, width, height, kernel) => {
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    const output = context.createImageData(width, height);
    const outData = output.data;

    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        let r = 0, g = 0, b = 0;
        
        for (let ky = -1; ky <= 1; ky++) {
          for (let kx = -1; kx <= 1; kx++) {
            const pixelPos = ((y + ky) * width + (x + kx)) * 4;
            const kernelValue = kernel[ky + 1][kx + 1];
            
            r += data[pixelPos] * kernelValue;
            g += data[pixelPos + 1] * kernelValue;
            b += data[pixelPos + 2] * kernelValue;
          }
        }

        const pos = (y * width + x) * 4;
        outData[pos] = Math.min(Math.max(r, 0), 255);
        outData[pos + 1] = Math.min(Math.max(g, 0), 255);
        outData[pos + 2] = Math.min(Math.max(b, 0), 255);
        outData[pos + 3] = data[pos + 3];
      }
    }
    
    context.putImageData(output, 0, 0);
  };

  const downloadImage = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'edited-image.png';
      link.href = canvasRef.current.toDataURL('image/png');
      link.click();
    } else {
      console.error('Canvas reference is not available');
    }
  };

  const renderImage = (canvas) => {
    if (canvas && imageSrc) {
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        const maxWidth = window.innerWidth * 0.6;
        const maxHeight = window.innerHeight * 0.7;
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = width * ratio;
          height = height * ratio;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.translate(translateX, translateY);
        ctx.drawImage(img, 0, 0, width, height);
        
        if (selectedFilter && !isLoading) {
          applyFilter(ctx, canvas.width, canvas.height, selectedFilter);
        }
      };
      img.onerror = () => {
        console.error('Failed to load image');
      };
      img.src = imageSrc;
    }
  };

  if (!imageSrc) {
    return (
      <div className="flex-2 flex items-center justify-center bg-gray-100 rounded-xl min-h-[400px] text-gray-600 text-lg font-medium border border-gray-200 shadow-md">
        Upload an image to start editing!
      </div>
    );
  }

  return (
    <div className="flex-2 flex flex-col items-center justify-center bg-gray-100 rounded-xl min-h-[400px] p-6 border border-gray-200 shadow-md">
      {isLoading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-gray-900 text-xl font-bold animate-pulse">Processing...</p>
        </div>
      ) : (
        <>
          <canvas
            ref={(canvas) => {
              canvasRef.current = canvas;
              renderImage(canvas);
            }}
            className="max-w-full max-h-[70vh] rounded-md shadow-inner"
          />
          <div className="relative inline-flex mt-6 group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              onClick={downloadImage}
              className="relative px-8 py-4 text-lg font-bold text-white bg-gray-900 rounded-xl transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Download Your Masterpiece
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ImagePreview;