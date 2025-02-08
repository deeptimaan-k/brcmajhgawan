import { useState } from 'react';
import { Save, User, Mail, Phone, Lock } from 'lucide-react';
import Swal from 'sweetalert2';

export function SettingsPage() {
  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    phone: '1234567890',
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    setProfile({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
    });

    Swal.fire({
      icon: 'success',
      title: 'Profile Updated',
      text: 'Your profile has been successfully updated',
      confirmButtonColor: '#004d40',
    });
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

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Settings</h2>
        
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              defaultValue={profile.name}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
              required
            />
            <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              defaultValue={profile.email}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
              required
            />
            <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <div className="relative">
            <input
              type="tel"
              name="phone"
              defaultValue={profile.phone}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
              required
            />
            <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors"
          >
            <Save className="w-5 h-5" />
            Update Profile
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h2>
        
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div className="relative">
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
              required
            />
            <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <div className="relative">
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
              required
            />
            <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
              required
            />
            <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors"
          >
            <Save className="w-5 h-5" />
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}