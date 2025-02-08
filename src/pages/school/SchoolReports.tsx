import { useState } from 'react';
import { FileText, Download, Filter } from 'lucide-react';

interface Report {
  id: string;
  title: string;
  type: string;
  date: string;
  status: 'pending' | 'submitted' | 'approved';
}

export function SchoolReports() {
  const [reports] = useState<Report[]>([
    {
      id: '1',
      title: 'Monthly Attendance Report',
      type: 'Attendance',
      date: '2024-03-01',
      status: 'submitted',
    },
    {
      id: '2',
      title: 'Student Progress Report',
      type: 'Academic',
      date: '2024-03-15',
      status: 'pending',
    },
    {
      id: '3',
      title: 'Teacher Performance Report',
      type: 'Staff',
      date: '2024-03-10',
      status: 'approved',
    },
  ]);

  const [selectedType, setSelectedType] = useState('all');

  const filteredReports = selectedType === 'all' 
    ? reports 
    : reports.filter(report => report.type.toLowerCase() === selectedType);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
            >
              <option value="all">All Reports</option>
              <option value="attendance">Attendance Reports</option>
              <option value="academic">Academic Reports</option>
              <option value="staff">Staff Reports</option>
            </select>
          </div>
          <button className="flex items-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors">
            <FileText className="w-5 h-5" />
            Generate New Report
          </button>
        </div>

        <div className="space-y-4">
          {filteredReports.map((report) => (
            <div key={report.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#004d40]" />
                    <h3 className="font-semibold text-gray-900">{report.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Type: {report.type} | Date: {new Date(report.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`
                    px-2 py-1 text-xs rounded-full
                    ${report.status === 'approved' 
                      ? 'bg-green-100 text-green-800' 
                      : report.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'}
                  `}>
                    {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                  </span>
                  <button 
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    title="Download Report"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredReports.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No reports found for the selected type
            </div>
          )}
        </div>
      </div>
    </div>
  );
}