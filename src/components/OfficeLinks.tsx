interface OfficeLink {
  href: string;
  imageSrc: string;
  alt: string;
}

const officeLinks: OfficeLink[] = [
  { href: "https://bareilly.nic.in/notice/bsa-mdm/", imageSrc: "/images/rec/bsa.jpg", alt: "BSA Office" },
  { href: "https://dietbareilly.org/", imageSrc: "/images/rec/diet.jpg", alt: "DIET" },
  { href: "https://ehrms.upsdc.gov.in/", imageSrc: "/images/rec/manav sampada.jpg", alt: "EHRMS" },
  { href: "https://www.india.gov.in/", imageSrc: "/images/rec/india_gov_in.png", alt: "India Gov" },
  { href: "https://diksha.gov.in/", imageSrc: "/images/rec/diksha.png", alt: "DIKSHA" },
  { href: "https://www.data.gov.in/", imageSrc: "/images/rec/data gover.jpg", alt: "Data Gov" },
  { href: "https://www.education.gov.in/", imageSrc: "/images/rec/ministryofeducation.jpg", alt: "Ministry of Education" },
  { href: "https://www.mygov.in/", imageSrc: "/images/rec/my gov.jpg", alt: "MyGov" },
  { href: "https://www.scert-up.in/", imageSrc: "/images/rec/SCERT.jpeg", alt: "SCERT" },
  { href: "http://www.siematup.org/", imageSrc: "/images/rec/siemet.png", alt: "SIEMAT" },
  { href: "https://up.gov.in/en", imageSrc: "/images/rec/uttar pradhesh sarkar.png", alt: "UP Gov" },
  { href: "https://prernaup.in/Login/NewLoginPage", imageSrc: "/images/rec/prerna up.png", alt: "Prerna UP" },
];


export function OfficeLinks() {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#004d40] mb-8">Other Offices</h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...officeLinks, ...officeLinks].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-4 hover:opacity-80 transition-opacity"
              >
                <img
                  src={link.imageSrc}
                  alt={link.alt}
                  className="w-48 h-32 object-cover rounded-lg shadow-md"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}