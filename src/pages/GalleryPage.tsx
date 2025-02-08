import { useState } from 'react';
import { GalleryHero } from '../components/gallery/GalleryHero';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { ImageModal } from '../components/gallery/ImageModal';
import { galleryImages } from '../data/siteData';

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <GalleryHero />
      <GalleryGrid images={galleryImages} onImageClick={handleImageClick} />
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={handleClose}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </div>
  );
}