import { useState } from 'react';
import { Building2, Lock, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

type LoginMode = 'brc' | 'school';

export function LoginForm() {
  const [mode, setMode] = useState<LoginMode>('brc');
  const [email, setEmail] = useState('');
  const [udiseCode, setUdiseCode] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (mode === 'brc') {
        // For demo, any login with BRC mode redirects to dashboard
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome to BRC Dashboard',
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/dashboard');
      } else {
        // For demo, any login with School mode redirects to school dashboard
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome to School Dashboard',
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/school-dashboard');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Please check your credentials and try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-lg shadow-md p-8">
        {/* Login Mode Selector */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setMode('brc')}
            className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors
              ${mode === 'brc' 
                ? 'bg-[#004d40] text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            disabled={isLoading}
          >
            <Building2 className="w-5 h-5" />
            BRC Login
          </button>
          <button
            onClick={() => setMode('school')}
            className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors
              ${mode === 'school' 
                ? 'bg-[#004d40] text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            disabled={isLoading}
          >
            <Building2 className="w-5 h-5" />
            School Login
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {mode === 'brc' ? (
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
                  placeholder="Enter BRC email"
                  required
                  disabled={isLoading}
                />
                <Building2 className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          ) : (
            <div>
              <label htmlFor="udiseCode" className="block text-sm font-medium text-gray-700 mb-1">
                UDISE Code
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="udiseCode"
                  value={udiseCode}
                  onChange={(e) => setUdiseCode(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
                  placeholder="Enter UDISE code"
                  required
                  disabled={isLoading}
                />
                <Building2 className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
                placeholder="Enter password"
                required
                disabled={isLoading}
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#004d40] text-white py-2 rounded-lg hover:bg-[#003d33] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="/forgot-password" className="text-sm text-[#004d40] hover:underline">
            Forgot Password?
          </a>
        </div>

        <div className="mt-4 text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <a href="/register" className="text-[#004d40] hover:underline">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}