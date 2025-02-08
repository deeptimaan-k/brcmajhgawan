import { useState } from 'react';
import { Plus, Trash2, Edit, Save } from 'lucide-react';

interface NewsItem {
  id: string;
  text: string;
  date: string;
}

interface Event {
  id: string;
  date: string;
  month: string;
  description: string;
}

export function NewsEventsManager() {
  const [news, setNews] = useState<NewsItem[]>([
    { id: '1', text: 'Important notice regarding annual examinations 2024', date: '2024-03-15' },
    { id: '2', text: 'Teacher training workshop scheduled for next week', date: '2024-03-20' },
  ]);

  const [events, setEvents] = useState<Event[]>([
    { id: '1', date: '15', month: 'Mar', description: 'Annual Examination begins' },
    { id: '2', date: '20', month: 'Mar', description: 'Teacher Training Workshop' },
  ]);

  const [newNewsItem, setNewNewsItem] = useState('');
  const [newEvent, setNewEvent] = useState({ date: '', month: '', description: '' });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">News & Events Manager</h1>
      </div>

      {/* News Management */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Manage News</h2>
        
        {/* Add News Form */}
        <form className="mb-6 flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={newNewsItem}
            onChange={(e) => setNewNewsItem(e.target.value)}
            placeholder="Enter news content..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors whitespace-nowrap"
          >
            <Plus className="w-5 h-5" />
            Add News
          </button>
        </form>

        {/* News List */}
        <div className="space-y-4">
          {news.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg gap-4">
              <span className="break-words">{item.text}</span>
              <div className="flex items-center gap-2 self-end md:self-auto">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events Management */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Manage Events</h2>
        
        {/* Add Event Form */}
        <form className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            placeholder="Date (e.g., 15)"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <input
            type="text"
            value={newEvent.month}
            onChange={(e) => setNewEvent({ ...newEvent, month: e.target.value })}
            placeholder="Month (e.g., Mar)"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <input
            type="text"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            placeholder="Event description..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent md:col-span-2"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors md:col-span-4"
          >
            <Plus className="w-5 h-5" />
            Add Event
          </button>
        </form>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-gray-50 rounded-lg gap-4">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <span className="bg-[#004d40] text-white p-2 rounded text-center min-w-[60px]">
                  {event.date}<br />{event.month}
                </span>
                <span className="break-words flex-1 md:flex-initial">{event.description}</span>
              </div>
              <div className="flex items-center gap-2 self-end md:self-auto">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}