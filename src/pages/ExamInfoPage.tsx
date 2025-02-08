import { PageHeader } from '../components/common/PageHeader';
import { ExamScheduleCard } from '../components/info/ExamScheduleCard';

const examSchedules = [
  {
    subject: 'Mathematics',
    date: 'March 15, 2024',
    time: '10:00 AM - 1:00 PM',
    class: 'Class 8',
  },
  {
    subject: 'Science',
    date: 'March 17, 2024',
    time: '10:00 AM - 1:00 PM',
    class: 'Class 8',
  },
  {
    subject: 'English',
    date: 'March 19, 2024',
    time: '10:00 AM - 1:00 PM',
    class: 'Class 8',
  },
];

export function ExamInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Examination Information"
        description="View upcoming examination schedules and important notices"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <ExamScheduleCard schedules={examSchedules} />
        </div>
      </div>
    </div>
  );
}