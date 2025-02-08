import { useState } from 'react';
import { Mail, Lock, Building2, BookOpen, User, Phone } from 'lucide-react';

type RegisterMode = 'brc' | 'school';

export function RegisterForm() {
  const [mode, setMode] = useState<RegisterMode>('brc');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-lg shadow-md p-8">
        {/* Register Mode Selector */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setMode('brc')}
            className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors
              ${mode === 'brc' 
                ? 'bg-[#004d40] text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            <Building2 className="w-5 h-5" />
            BRC Register
          </button>
          <button
            onClick={() => setMode('school')}
            className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors
              ${mode === 'school' 
                ? 'bg-[#004d40] text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            <BookOpen className="w-5 h-5" />
            School Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {mode === 'brc' ? 'BRC Name' : 'School Name'}
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
                placeholder={mode === 'brc' ? "Enter BRC name" : "Enter school name"}
                required
              />
              <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
                placeholder={mode === 'brc' ? "Enter BRC email" : "Enter school email"}
                required
              />
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
                placeholder="Enter phone number"
                required
              />
              <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
                placeholder="Enter password"
                required
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
                placeholder="Confirm password"
                required
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#004d40] text-white py-2 rounded-lg hover:bg-[#003d33] transition-colors"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <a href="/login" className="text-[#004d40] hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}