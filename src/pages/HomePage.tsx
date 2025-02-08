import { NewsSection } from '../components/NewsSection';
import { EventSection } from '../components/EventSection';
import { OfficerSection } from '../components/OfficerSection';
import { InfoSection } from '../components/InfoCards';
import { Gallery } from '../components/Gallery';
import { OfficeLinks } from '../components/OfficeLinks';
import { news, events, galleryImages } from '../data/siteData';

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full relative overflow-hidden">
        <div className="h-[300px] md:h-[400px] lg:h-[600px]">
          <img 
            src="/images/slider.jpg" 
            alt="School building"
            className="w-full h-full object-cover"
          />
          {/* Optional overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>
      
      {/* Information Sections */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <NewsSection news={news} />
          <EventSection events={events} />
          <OfficerSection 
            name="SUNEEL KUMAR SHARMA"
            designation="BEO"
            image="/images/sunilkumar.jpeg"
          />
        </div>
      </div>
      
      <InfoSection />
      <Gallery images={galleryImages} />
      <OfficeLinks />
    </>
  );
}