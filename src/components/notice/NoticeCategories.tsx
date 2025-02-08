import { noticeCategories } from '../../data/siteData';

export function NoticeCategories() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Categories</h2>
      <div className="space-y-2">
        {noticeCategories.map((category, index) => (
          <button
            key={index}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-[#004d40]/10 text-gray-700 hover:text-[#004d40] transition-colors"
          >
            {category.name}
            <span className="float-right text-sm text-gray-500">{category.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
}