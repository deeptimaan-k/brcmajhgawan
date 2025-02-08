import { useState } from 'react';
import { Calendar, Users, Check, X } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  rollNumber: string;
  class: string;
  section: string;
}

interface AttendanceRecord {
  date: string;
  present: boolean;
}

export function SchoolAttendance() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const [students] = useState<Student[]>([
    { id: '1', name: 'Rahul Kumar', rollNumber: '2024001', class: '8', section: 'A' },
    { id: '2', name: 'Priya Singh', rollNumber: '2024002', class: '8', section: 'A' },
    { id: '3', name: 'Amit Sharma', rollNumber: '2024003', class: '8', section: 'A' },
  ]);

  const [attendance, setAttendance] = useState<Record<string, AttendanceRecord>>({});

  const handleAttendance = (studentId: string, present: boolean) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: { date: selectedDate, present },
    }));
  };

  const getAttendanceStatus = (studentId: string) => {
    return attendance[studentId]?.present;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Attendance Management</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          >
            <option value="">Select Class</option>
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>Class {num}</option>
            ))}
          </select>

          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          >
            <option value="">Select Section</option>
            <option value="A">Section A</option>
            <option value="B">Section B</option>
            <option value="C">Section C</option>
          </select>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />

          <button className="flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors">
            <Calendar className="w-5 h-5" />
            View Attendance
          </button>
        </div>

        {selectedClass && selectedSection && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Class {selectedClass}-{selectedSection} Attendance
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Date: {new Date(selectedDate).toLocaleDateString()}
                </span>
                <span className="text-sm text-gray-600">
                  <Users className="w-5 h-5 inline-block mr-1" />
                  Total Students: {students.length}
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Roll No</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Attendance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td className="px-4 py-3 text-sm text-gray-900">{student.rollNumber}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{student.name}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleAttendance(student.id, true)}
                            className={`p-2 rounded-lg ${
                              getAttendanceStatus(student.id) === true
                                ? 'bg-green-100 text-green-700'
                                : 'hover:bg-green-50 text-gray-400'
                            }`}
                          >
                            <Check className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleAttendance(student.id, false)}
                            className={`p-2 rounded-lg ${
                              getAttendanceStatus(student.id) === false
                                ? 'bg-red-100 text-red-700'
                                : 'hover:bg-red-50 text-gray-400'
                            }`}
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end mt-4">
              <button className="flex items-center justify-center gap-2 bg-[#004d40] text-white px-6 py-2 rounded-lg hover:bg-[#003d33] transition-colors">
                Save Attendance
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}