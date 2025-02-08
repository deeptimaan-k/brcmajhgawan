import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Image, 
  Bell, 
  Award,
  FileBarChart2,
  Settings,
  School,
} from 'lucide-react';

export const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'News & Events', href: '/dashboard/news-events', icon: Bell },
  { name: 'Notice Board', href: '/dashboard/notices', icon: FileText },
  { name: 'Gallery', href: '/dashboard/gallery', icon: Image },
  { name: 'Exam Info', href: '/dashboard/exams', icon: Award },
  { name: 'Results', href: '/dashboard/results', icon: FileBarChart2 },
  { name: 'Holiday Calendar', href: '/dashboard/holidays', icon: Calendar },
  { name: 'School Requests', href: '/dashboard/schools', icon: School },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];