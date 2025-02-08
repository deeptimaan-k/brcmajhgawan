import { PageHeader } from '../components/common/PageHeader';
import { ResultCard } from '../components/info/ResultCard';

export function ResultsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Online Results"
        description="Check and download your examination results"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <ResultCard />
        </div>
      </div>
    </div>
  );
}