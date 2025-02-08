import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#004d40]/10 rounded-lg">
            <MapPin className="w-6 h-6 text-[#004d40]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Address</h3>
            <p className="text-gray-600">Block Resource Centre, Majhgawan<br />Bareilly, Uttar Pradesh</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#004d40]/10 rounded-lg">
            <Phone className="w-6 h-6 text-[#004d40]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-600">+91 123456789</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#004d40]/10 rounded-lg">
            <Mail className="w-6 h-6 text-[#004d40]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600">brcmajhgawan@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#004d40]/10 rounded-lg">
            <Clock className="w-6 h-6 text-[#004d40]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Office Hours</h3>
            <p className="text-gray-600">Monday - Saturday: 9:00 AM - 5:00 PM<br />Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}