import { PageHeader } from '../components/common/PageHeader';
import { TenderCard } from '../components/info/TenderCard';

const tenders = [
  {
    id: '1',
    title: 'Supply of Computer Equipment for Schools',
    publishDate: 'March 1, 2024',
    lastDate: 'March 30, 2024',
    department: 'IT Department',
    documentUrl: '#',
  },
  {
    id: '2',
    title: 'School Infrastructure Development Project',
    publishDate: 'March 5, 2024',
    lastDate: 'April 5, 2024',
    department: 'Infrastructure',
    documentUrl: '#',
  },
];

export function TendersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Tenders"
        description="View active tenders and procurement notices"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          {tenders.map(tender => (
            <TenderCard key={tender.id} tender={tender} />
          ))}
        </div>
      </div>
    </div>
  );
}