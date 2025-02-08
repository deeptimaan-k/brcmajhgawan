import { PageHeader } from '../components/common/PageHeader';
import { LoginForm } from '../components/auth/LoginForm';

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Login"
        description="Access your BRC or School account"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}