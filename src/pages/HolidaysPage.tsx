import { PageHeader } from '../components/common/PageHeader';
import { HolidayCard } from '../components/info/HolidayCard';

const holidays = {
  'March 2024': [
    {
      date: 'March 8',
      name: 'Maha Shivaratri',
      type: 'gazetted',
      day: 'Friday',
    },
    {
      date: 'March 25',
      name: 'Holi',
      type: 'gazetted',
      day: 'Monday',
    },
  ],
  'April 2024': [
    {
      date: 'April 11',
      name: 'Eid-ul-Fitr',
      type: 'gazetted',
      day: 'Thursday',
    },
    {
      date: 'April 14',
      name: 'Dr. Ambedkar Jayanti',
      type: 'gazetted',
      day: 'Sunday',
    },
  ],
} as const;

export function HolidaysPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Holiday List"
        description="Academic calendar and holiday schedule"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {Object.entries(holidays).map(([month, monthHolidays]) => (
            <HolidayCard key={month} month={month} holidays={monthHolidays} />
          ))}
        </div>
      </div>
    </div>
  );
}