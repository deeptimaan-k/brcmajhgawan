import { 
  Users, 
  School, 
  FileText, 
  Image,
  TrendingUp,
  Bell
} from 'lucide-react';

const stats = [
  { name: 'Total Schools', value: '45', icon: School, change: '+2 this month' },
  { name: 'Active Users', value: '128', icon: Users, change: '+12% from last month' },
  { name: 'Total Notices', value: '24', icon: FileText, change: '4 new this week' },
  { name: 'Gallery Items', value: '156', icon: Image, change: '+8 this week' },
];

const recentActivities = [
  { type: 'notice', message: 'New notice added: Annual Examination Schedule', time: '2 hours ago' },
  { type: 'gallery', message: 'Added 5 new photos to gallery', time: '5 hours ago' },
  { type: 'update', message: 'Updated holiday calendar', time: '1 day ago' },
  { type: 'notice', message: 'New notice: Teacher Training Workshop', time: '2 days ago' },
];

export function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
      </div>

      {/* Stats Grid */}
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

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-[#004d40]/10 rounded-lg">
                <Bell className="w-5 h-5 text-[#004d40]" />
              </div>
              <div>
                <p className="text-gray-900">{activity.message}</p>
                <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}