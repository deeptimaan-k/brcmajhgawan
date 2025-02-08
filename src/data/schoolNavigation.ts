import { 
  LayoutDashboard, 
  Users, 
  GraduationCap,
  FileText,
  Calendar,
  Settings,
  BookOpen,
  Building2
} from 'lucide-react';

export const schoolNavigation = [
  { name: 'Overview', href: '/school-dashboard', icon: LayoutDashboard },
  { name: 'School Profile', href: '/school-dashboard/profile', icon: Building2 },
  { name: 'Students', href: '/school-dashboard/students', icon: Users },
  { name: 'Teachers', href: '/school-dashboard/teachers', icon: GraduationCap },
  { name: 'Attendance', href: '/school-dashboard/attendance', icon: Calendar },
  { name: 'Academic', href: '/school-dashboard/academic', icon: BookOpen },
  { name: 'Reports', href: '/school-dashboard/reports', icon: FileText },
  { name: 'Settings', href: '/school-dashboard/settings', icon: Settings },
];