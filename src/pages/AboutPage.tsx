import { MapPin, Mail, Phone } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* About Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-[#004d40] mb-6">About Us</h1>
          <div className="prose prose-lg">
            <p className="text-gray-700 mb-6">
              The Block Resource Centre (BRC) in Majhgawan, Bareilly, serves as a pivotal institution for the promotion of quality education and teacher training at the grassroots level. Established to support government schools in the region, the BRC focuses on enhancing teaching standards, improving learning outcomes, and fostering community engagement in education.
            </p>
            <p className="text-gray-700 mb-6">
              At BRC Majhgawan, we provide comprehensive training programs for educators, conduct workshops to address challenges in teaching, and promote innovative pedagogical methods. We believe in the transformative power of education to uplift individuals and communities alike.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-[#004d40] text-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-100">
            To create an inclusive and equitable education system where every child has access to quality learning opportunities. By empowering educators and fostering innovation, we aim to build a brighter future for the children of Bareilly and beyond.
          </p>
        </section>

        {/* Notice Board Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-[#004d40] mb-4">Notice Board</h2>
          <p className="text-gray-700">
            Stay updated with the latest announcements, schedules, and important information from BRC Majhgawan.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-[#004d40] mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-[#004d40] w-6 h-6" />
              <span className="text-gray-700">Block Resource Centre, Majhgawan, Bareilly, Uttar Pradesh</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#004d40] w-6 h-6" />
              <span className="text-gray-700">brc.majhgawan@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#004d40] w-6 h-6" />
              <span className="text-gray-700">+91-9876543210</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}