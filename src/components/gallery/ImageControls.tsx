import { ZoomIn, ZoomOut, Maximize2, X } from 'lucide-react';

interface ImageControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFullscreen: () => void;
  onClose: () => void;
  isFullscreen: boolean;
}

export function ImageControls({
  onZoomIn,
  onZoomOut,
  onFullscreen,
  onClose,
  isFullscreen,
}: ImageControlsProps) {
  return (
    <div className="absolute top-2 md:top-4 right-2 md:right-4 flex gap-2 md:gap-4 z-30">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onZoomIn();
        }}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        title="Zoom In (+)"
      >
        <ZoomIn className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onZoomOut();
        }}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        title="Zoom Out (-)"
      >
        <ZoomOut className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onFullscreen();
        }}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        title="Toggle Fullscreen (F)"
      >
        <Maximize2 className={`w-5 h-5 md:w-6 md:h-6 ${isFullscreen ? 'rotate-180' : ''}`} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        title="Close (Esc)"
      >
        <X className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}