import { Users, GraduationCap, Building2, Armchair as Wheelchair, UserCheck, BookOpen, TrendingUp, AlertCircle } from 'lucide-react';

const stats = [
  { name: 'Total Students', value: '450', icon: Users, change: '+15 this month' },
  { name: 'Total Teachers', value: '25', icon: GraduationCap, change: '+2 this month' },
  { name: 'CWSN Students', value: '5', icon: Wheelchair, change: 'No change' },
  { name: 'Attendance Rate', value: '92%', icon: UserCheck, change: '+2% from last month' },
];

const schoolInfo = {
  name: "City Public School",
  type: "Composite",
  udiseCode: "09070100701",
  headMaster: "John Doe",
  ehrmsCode: "EMP123456",
  phone: "+91 9876543210",
  location: "123 School Street, City Area, District",
};

const studentStats = {
  total: 450,
  boys: 240,
  girls: 210,
  cwsn: 5
};

const teacherStats = {
  total: 25,
  assistantTeachers: 15,
  shikshaaMitra: 5,
  anudeshak: 5
};

export function SchoolDashboardHome() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#004d40] to-[#00695c] rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">{schoolInfo.name}</h1>
        <p className="text-gray-100">Welcome to your school dashboard</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                </div>
                <div className="p-3 bg-[#004d40]/10 rounded-lg">
                  <Icon className="w-6 h-6 text-[#004d40]" />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-500" />
                {stat.change}
              </p>
            </div>
          );
        })}
      </div>

      {/* School Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* School Profile Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">School Profile</h2>
            <Building2 className="w-5 h-5 text-[#004d40]" />
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">School Type</p>
                <p className="font-medium">{schoolInfo.type}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">UDISE Code</p>
                <p className="font-medium">{schoolInfo.udiseCode}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Head Master</p>
                <p className="font-medium">{schoolInfo.headMaster}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">EHRMS Code</p>
                <p className="font-medium">{schoolInfo.ehrmsCode}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{schoolInfo.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{schoolInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notices */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Important Notices</h2>
            <AlertCircle className="w-5 h-5 text-[#004d40]" />
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <h3 className="font-medium text-yellow-800">Parent-Teacher Meeting</h3>
              <p className="text-sm text-yellow-700">Scheduled for next Saturday at 10 AM</p>
            </div>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
              <h3 className="font-medium text-blue-800">Annual Day Preparation</h3>
              <p className="text-sm text-blue-700">Practice sessions start from next week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student Statistics */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Student Statistics</h2>
            <BookOpen className="w-5 h-5 text-[#004d40]" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Total Students</span>
              <span className="font-semibold">{studentStats.total}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-600">Boys</p>
                <p className="text-2xl font-semibold text-blue-700">{studentStats.boys}</p>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg">
                <p className="text-sm text-pink-600">Girls</p>
                <p className="text-2xl font-semibold text-pink-700">{studentStats.girls}</p>
              </div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-600">CWSN Students</p>
              <p className="text-2xl font-semibold text-purple-700">{studentStats.cwsn}</p>
            </div>
          </div>
        </div>

        {/* Teacher Statistics */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Teacher Statistics</h2>
            <GraduationCap className="w-5 h-5 text-[#004d40]" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Total Teachers</span>
              <span className="font-semibold">{teacherStats.total}</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-600">Assistant Teachers</p>
                <p className="text-2xl font-semibold text-green-700">{teacherStats.assistantTeachers}</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-600">Shiksha Mitra</p>
                <p className="text-2xl font-semibold text-orange-700">{teacherStats.shikshaaMitra}</p>
              </div>
              <div className="p-4 bg-cyan-50 rounded-lg">
                <p className="text-sm text-cyan-600">Anudeshak</p>
                <p className="text-2xl font-semibold text-cyan-700">{teacherStats.anudeshak}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}