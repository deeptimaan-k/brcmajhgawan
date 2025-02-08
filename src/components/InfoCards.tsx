import { MapPin, FileText, Award, FileBarChart2, Calendar } from 'lucide-react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-md p-4 h-full">
        <div className="bg-[#00bcd4] -mx-4 -mt-4 p-4 rounded-t-lg">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        {children}
      </div>
    </div>
  );
}

export function InfoSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfoCard title="Notice Board">
          <ul className="space-y-4 mt-4">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#004d40] rounded-full"></span>
              Important notice regarding examinations
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#004d40] rounded-full"></span>
              Updates about school activities
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#004d40] rounded-full"></span>
              Upcoming events and celebrations
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="Useful Information">
          <ul className="space-y-6 mt-4">
            <li>
              <a href="/exam-info" className="flex items-center gap-3 text-gray-700 hover:text-[#00bcd4] transition-colors group">
                <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-[#00bcd4]/10">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="font-medium">Exam Information</span>
              </a>
            </li>
            <li>
              <a href="/results" className="flex items-center gap-3 text-gray-700 hover:text-[#00bcd4] transition-colors group">
                <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-[#00bcd4]/10">
                  <Award className="w-6 h-6" />
                </div>
                <span className="font-medium">Online Results</span>
              </a>
            </li>
            <li>
              <a href="/tenders" className="flex items-center gap-3 text-gray-700 hover:text-[#00bcd4] transition-colors group">
                <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-[#00bcd4]/10">
                  <FileBarChart2 className="w-6 h-6" />
                </div>
                <span className="font-medium">Tenders</span>
              </a>
            </li>
            <li>
              <a href="/holidays" className="flex items-center gap-3 text-gray-700 hover:text-[#00bcd4] transition-colors group">
                <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-[#00bcd4]/10">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="font-medium">Holidays List</span>
              </a>
            </li>
          </ul>
        </InfoCard>

        <InfoCard title="Map">
          <div className="w-full h-[300px] rounded-lg overflow-hidden mt-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112327.9365978959!2d79.414661!3d28.381576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a007334d02998d%3A0x5b9d44cf31ee87f!2sBareilly%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1735919255339!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </InfoCard>
      </div>
    </div>
  );
}