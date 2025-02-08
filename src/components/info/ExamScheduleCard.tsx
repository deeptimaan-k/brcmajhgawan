import { Calendar, Clock } from 'lucide-react';

interface ExamSchedule {
  subject: string;
  date: string;
  time: string;
  class: string;
}

interface ExamScheduleCardProps {
  schedules: ExamSchedule[];
}

export function ExamScheduleCard({ schedules }: ExamScheduleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Examinations</h2>
      <div className="space-y-4">
        {schedules.map((schedule, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{schedule.subject}</h3>
              <p className="text-gray-600">Class: {schedule.class}</p>
              <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {schedule.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {schedule.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}