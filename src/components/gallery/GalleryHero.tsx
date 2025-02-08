import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600",
    title: "Learning Together",
  },
  {
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600",
    title: "Growing Minds",
  },
  {
    url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600",
    title: "Building Future",
  },
];

export function GalleryHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Explore our collection of moments that showcase our commitment to education
            and the growth of our students. Each image tells a story of learning,
            achievement, and community.
          </p>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 bg-white text-[#004d40] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Gallery
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}