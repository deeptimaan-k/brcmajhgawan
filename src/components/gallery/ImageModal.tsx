import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useKeyboardControls } from '../../hooks/useKeyboardControls';
import { useFullscreen } from '../../hooks/useFullscreen';
import { ImageControls } from './ImageControls';

interface ImageModalProps {
  image: string;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function ImageModal({ image, onClose, onPrevious, onNext }: ImageModalProps) {
  const [scale, setScale] = useState(1);
  const { isFullscreen, toggleFullscreen } = useFullscreen();

  // Reset scale when image changes
  useEffect(() => {
    setScale(1);
  }, [image]);

  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  }, []);

  useKeyboardControls({
    onClose,
    onPrevious,
    onNext,
    onZoomIn: handleZoomIn,
    onZoomOut: handleZoomOut,
    onFullscreen: toggleFullscreen,
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center touch-none"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <ImageControls
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onFullscreen={toggleFullscreen}
          onClose={onClose}
          isFullscreen={isFullscreen}
        />

        <button
          onClick={onPrevious}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
          title="Previous (←)"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt="Preview"
            className="max-w-[95%] md:max-w-[90%] max-h-[90vh] object-contain transition-transform duration-200 select-none"
            style={{ transform: `scale(${scale})` }}
            draggable={false}
          />
        </div>

        <button
          onClick={onNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
          title="Next (→)"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}