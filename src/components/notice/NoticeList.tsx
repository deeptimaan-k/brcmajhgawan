import { Clock, FileText } from 'lucide-react';
import { notices } from '../../data/siteData';

export function NoticeList() {
  return (
    <div className="space-y-6">
      {notices.map((notice, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#004d40]/10 rounded-lg">
              <FileText className="w-6 h-6 text-[#004d40]" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{notice.title}</h3>
              <p className="text-gray-600 mb-4">{notice.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{notice.date}</span>
                {notice.category && (
                  <span className="px-2 py-1 rounded-full bg-[#004d40]/10 text-[#004d40] text-xs font-medium">
                    {notice.category}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}