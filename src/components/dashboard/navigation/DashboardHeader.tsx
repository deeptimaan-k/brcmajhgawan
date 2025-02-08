import { Menu, Bell, User } from 'lucide-react';

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20 lg:ml-[280px]">
      <div className="px-4 py-3 flex items-center justify-between">
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={onMenuClick}
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-4 ml-auto">
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}