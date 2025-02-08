import { NoticeList } from '../components/notice/NoticeList';
import { NoticeCategories } from '../components/notice/NoticeCategories';
import { PageHeader } from '../components/common/PageHeader';

export function NoticeBoardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Notice Board"
        description="Stay updated with the latest announcements and important information"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <NoticeCategories />
          <div className="lg:col-span-3">
            <NoticeList />
          </div>
        </div>
      </div>
    </div>
  );
}