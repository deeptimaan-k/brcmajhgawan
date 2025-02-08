import { useEffect } from 'react';

interface KeyboardControlsProps {
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFullscreen: () => void;
}

export function useKeyboardControls({
  onClose,
  onPrevious,
  onNext,
  onZoomIn,
  onZoomOut,
  onFullscreen,
}: KeyboardControlsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrevious();
          break;
        case 'ArrowRight':
          onNext();
          break;
        case '+':
        case '=':
          onZoomIn();
          break;
        case '-':
          onZoomOut();
          break;
        case 'f':
          onFullscreen();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrevious, onNext, onZoomIn, onZoomOut, onFullscreen]);
}