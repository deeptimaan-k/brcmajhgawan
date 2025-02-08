import { Link, useLocation } from 'react-router-dom';
import { LogOut, X } from 'lucide-react';
import { navigation } from '../../../data/dashboardNavigation';

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  const location = useLocation();

  return (
    <aside className={`
      fixed top-0 left-0 z-50 h-full w-[280px] bg-[#004d40] text-white
      transform transition-transform duration-200 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      {/* Header */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-[#003d33]">
        <h1 className="text-xl font-bold">BRC Dashboard</h1>
        <button
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-white/10 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="h-[calc(100%-8rem)] overflow-y-auto">
        <ul className="p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-2 rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-white/10 text-white' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }
                  `}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      onClose();
                    }
                  }}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="h-16 px-4 border-t border-[#003d33] flex items-center">
        <button 
          className="flex items-center gap-3 px-4 py-2 w-full text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
          onClick={() => {/* Handle logout */}}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}