import { PageHeader } from '../components/common/PageHeader';
import { RegisterForm } from '../components/auth/RegisterForm';

export function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Register"
        description="Create your BRC or School account"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}