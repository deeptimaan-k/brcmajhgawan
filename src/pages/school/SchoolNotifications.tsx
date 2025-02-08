import { Bell, Check } from 'lucide-react';
import { useState } from 'react';

interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  type: 'info' | 'warning' | 'success';
  read: boolean;
}

export function SchoolNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'New Circular Released',
      message: 'Important circular regarding annual examination schedule has been released.',
      date: '2024-03-15',
      type: 'info',
      read: false,
    },
    {
      id: '2',
      title: 'Teacher Training Workshop',
      message: 'Mandatory training workshop scheduled for next week.',
      date: '2024-03-14',
      type: 'warning',
      read: false,
    },
    {
      id: '3',
      title: 'Student Registration Complete',
      message: 'All student registrations have been successfully processed.',
      date: '2024-03-13',
      type: 'success',
      read: true,
    },
  ]);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
          <Bell className="w-6 h-6 text-[#004d40]" />
        </div>
        <button
          onClick={markAllAsRead}
          className="text-sm text-[#004d40] hover:text-[#003d33]"
        >
          Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`
              p-4 rounded-lg border transition-colors
              ${notification.read ? 'bg-white' : 'bg-blue-50'}
              ${notification.type === 'warning' ? 'border-yellow-200' : 
                notification.type === 'success' ? 'border-green-200' : 
                'border-blue-200'}
            `}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                <p className="text-gray-600 mt-1">{notification.message}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(notification.date).toLocaleDateString()}
                </p>
              </div>
              {!notification.read && (
                <button
                  onClick={() => markAsRead(notification.id)}
                  className="p-2 text-[#004d40] hover:bg-[#004d40]/10 rounded-lg"
                  title="Mark as read"
                >
                  <Check className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No notifications to display
          </div>
        )}
      </div>
    </div>
  );
}