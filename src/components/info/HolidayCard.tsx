import { Calendar } from 'lucide-react';

interface Holiday {
  date: string;
  name: string;
  type: 'gazetted' | 'restricted' | 'other';
  day: string;
}

interface HolidayCardProps {
  month: string;
  holidays: Holiday[];
}

export function HolidayCard({ month, holidays }: HolidayCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{month}</h3>
      <div className="space-y-4">
        {holidays.map((holiday, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
            <div className="flex items-center justify-center w-12 h-12 bg-[#004d40] text-white rounded-lg">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{holiday.name}</h4>
              <p className="text-gray-600">{holiday.date} ({holiday.day})</p>
              <span className={`
                inline-block px-2 py-1 text-xs rounded-full mt-2
                ${holiday.type === 'gazetted' ? 'bg-green-100 text-green-800' : 
                  holiday.type === 'restricted' ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-gray-100 text-gray-800'}
              `}>
                {holiday.type.charAt(0).toUpperCase() + holiday.type.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}