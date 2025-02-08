import { FileText, Download } from 'lucide-react';

interface Tender {
  id: string;
  title: string;
  publishDate: string;
  lastDate: string;
  department: string;
  documentUrl: string;
}

interface TenderCardProps {
  tender: Tender;
}

export function TenderCard({ tender }: TenderCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#004d40]/10 rounded-lg">
          <FileText className="w-6 h-6 text-[#004d40]" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{tender.title}</h3>
          <div className="space-y-2 text-sm text-gray-600 mb-4">
            <p>Department: {tender.department}</p>
            <p>Published: {tender.publishDate}</p>
            <p>Last Date: {tender.lastDate}</p>
          </div>
          <a
            href={tender.documentUrl}
            className="inline-flex items-center gap-2 text-[#004d40] hover:text-[#003d33]"
          >
            <Download className="w-5 h-5" />
            Download Document
          </a>
        </div>
      </div>
    </div>
  );
}