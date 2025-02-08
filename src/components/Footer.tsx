import { Mail, Headphones, Phone, Globe } from 'lucide-react';

export function Footer() {
  return (
    <>
      <footer className="bg-[#004d40] text-white py-12 mt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div>
            <h2 className="text-xl font-bold mb-4">Back To</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/gallery" className="hover:text-gray-300">Gallery</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Schools Section</h2>
            <ul className="space-y-2">
              <li><a href="/schools/primary" className="hover:text-gray-300">Primary Schools</a></li>
              <li><a href="/schools/upper-primary" className="hover:text-gray-300">Upper Primary Schools</a></li>
              <li><a href="/schools/composite" className="hover:text-gray-300">Composite Upper Primary Schools</a></li>
              <li><a href="/schools/kgbv" className="hover:text-gray-300">Kastoorba Gandhi Balika Vidyalay</a></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="https://diksha.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Diksha Portal</a></li>
              <li><a href="https://dbtransfer.prernaup.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Prerna Portal</a></li>
              <li><a href="https://pmevidya.education.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">PM e-Vidhya</a></li>
              <li><a href="https://ehrms.upsdc.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Manav Sampada Portal</a></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Mail size={20} />
                <span>brcmajhgawan@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Headphones size={20} />
                <span>WhatsApp: +91 123456789</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} />
                <span>Contact: +91 123456789</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={20} />
                <span>www.brcmajhgawan.in</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-[#003329] text-white py-4 text-center">
        <p>Copyright © 2024, BRC Majhgawan, (Bareilly) All Rights Reserved</p>
      </div>
    </>
  );
}