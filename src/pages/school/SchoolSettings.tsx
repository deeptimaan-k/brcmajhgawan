import { useState } from 'react';
import { Save, Bell, Lock } from 'lucide-react';
import Swal from 'sweetalert2';

export function SchoolSettings() {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    attendanceAlerts: true,
    examUpdates: true,
    holidayAnnouncements: true,
  });

  const handleNotificationChange = (setting: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    if (formData.get('newPassword') !== formData.get('confirmPassword')) {
      Swal.fire({
        icon: 'error',
        title: 'Password Mismatch',
        text: 'New password and confirm password do not match',
        confirmButtonColor: '#004d40',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Password Updated',
      text: 'Your password has been successfully changed',
      confirmButtonColor: '#004d40',
    });
    form.reset();
  };

  const handleSaveNotifications = () => {
    Swal.fire({
      icon: 'success',
      title: 'Settings Saved',
      text: 'Your notification preferences have been updated',
      confirmButtonColor: '#004d40',
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <Bell className="w-6 h-6 text-[#004d40]" />
          <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>
        </div>

        <div className="space-y-4">
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-gray-700">Email Notifications</span>
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={notifications.emailNotifications}
                onChange={() => handleNotificationChange('emailNotifications')}
              />
              <div className={`
                block w-14 h-8 rounded-full transition-colors
                ${notifications.emailNotifications ? 'bg-[#004d40]' : 'bg-gray-300'}
              `}></div>
              <div className={`
                absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform
                ${notifications.emailNotifications ? 'translate-x-6' : 'translate-x-0'}
              `}></div>
            </div>
          </label>

          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-gray-700">SMS Notifications</span>
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={notifications.smsNotifications}
                onChange={() => handleNotificationChange('smsNotifications')}
              />
              <div className={`
                block w-14 h-8 rounded-full transition-colors
                ${notifications.smsNotifications ? 'bg-[#004d40]' : 'bg-gray-300'}
              `}></div>
              <div className={`
                absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform
                ${notifications.smsNotifications ? 'translate-x-6' : 'translate-x-0'}
              `}></div>
            </div>
          </label>

          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-gray-700">Attendance Alerts</span>
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={notifications.attendanceAlerts}
                onChange={() => handleNotificationChange('attendanceAlerts')}
              />
              <div className={`
                block w-14 h-8 rounded-full transition-colors
                ${notifications.attendanceAlerts ? 'bg-[#004d40]' : 'bg-gray-300'}
              `}></div>
              <div className={`
                absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform
                ${notifications.attendanceAlerts ? 'translate-x-6' : 'translate-x-0'}
              `}></div>
            </div>
          </label>

          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-gray-700">Exam Updates</span>
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={notifications.examUpdates}
                onChange={() => handleNotificationChange('examUpdates')}
              />
              <div className={`
                block w-14 h-8 rounded-full transition-colors
                ${notifications.examUpdates ? 'bg-[#004d40]' : 'bg-gray-300'}
              `}></div>
              <div className={`
                absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform
                ${notifications.examUpdates ? 'translate-x-6' : 'translate-x-0'}
              `}></div>
            </div>
          </label>

          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-gray-700">Holiday Announcements</span>
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={notifications.holidayAnnouncements}
                onChange={() => handleNotificationChange('holidayAnnouncements')}
              />
              <div className={`
                block w-14 h-8 rounded-full transition-colors
                ${notifications.holidayAnnouncements ? 'bg-[#004d40]' : 'bg-gray-300'}
              `}></div>
              <div className={`
                absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform
                ${notifications.holidayAnnouncements ? 'translate-x-6' : 'translate-x-0'}
              `}></div>
            </div>
          </label>
        </div>

        <button
          onClick={handleSaveNotifications}
          className="mt-6 flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors w-full"
        >
          <Save className="w-5 h-5" />
          Save Preferences
        </button>
      </div>

      {/* Password Change */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <Lock className="w-6 h-6 text-[#004d40]" />
          <h2 className="text-lg font-semibold text-gray-900">Change Password</h2>
        </div>

        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors w-full"
          >
            <Save className="w-5 h-5" />
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}