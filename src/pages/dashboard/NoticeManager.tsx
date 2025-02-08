import { useState } from 'react';
import { Plus, Trash2, Edit } from 'lucide-react';
import Swal from 'sweetalert2';

interface Notice {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  important: boolean;
}

export function NoticeManager() {
  const [notices, setNotices] = useState<Notice[]>([
    {
      id: '1',
      title: 'Annual Examination Schedule',
      content: 'The annual examination schedule has been released...',
      category: 'Examination',
      date: '2024-03-15',
      important: true,
    },
  ]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const newNotice: Notice = {
      id: Date.now().toString(),
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      category: formData.get('category') as string,
      date: new Date().toISOString().split('T')[0],
      important: formData.get('important') === 'true',
    };

    setNotices([...notices, newNotice]);
    form.reset();
    
    Swal.fire({
      icon: 'success',
      title: 'Notice Added',
      text: 'New notice has been successfully added',
      confirmButtonColor: '#004d40',
    });
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Delete Notice?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setNotices(notices.filter(notice => notice.id !== id));
        Swal.fire('Deleted!', 'Notice has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Notice Board Manager</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Notice</h2>
        
        <form onSubmit={handleAdd} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Notice Title"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          
          <textarea
            name="content"
            placeholder="Notice Content"
            required
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          ></textarea>
          
          <select
            name="category"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          >
            <option value="">Select Category</option>
            <option value="Examination">Examination</option>
            <option value="General">General</option>
            <option value="Important">Important</option>
            <option value="Events">Events</option>
          </select>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="important"
              id="important"
              value="true"
              className="rounded border-gray-300 text-[#004d40] focus:ring-[#004d40]"
            />
            <label htmlFor="important" className="text-sm text-gray-700">
              Mark as Important
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Notice
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">All Notices</h2>
        
        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{notice.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{notice.content}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-gray-500">{notice.date}</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-[#004d40]/10 text-[#004d40]">
                      {notice.category}
                    </span>
                    {notice.important && (
                      <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                        Important
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    onClick={() => {
                      Swal.fire({
                        title: 'Edit Notice',
                        html: `
                          <input id="title" class="swal2-input" placeholder="Title" value="${notice.title}">
                          <textarea id="content" class="swal2-textarea" placeholder="Content">${notice.content}</textarea>
                          <select id="category" class="swal2-select">
                            <option value="Examination" ${notice.category === 'Examination' ? 'selected' : ''}>Examination</option>
                            <option value="General" ${notice.category === 'General' ? 'selected' : ''}>General</option>
                            <option value="Important" ${notice.category === 'Important' ? 'selected' : ''}>Important</option>
                            <option value="Events" ${notice.category === 'Events' ? 'selected' : ''}>Events</option>
                          </select>
                        `,
                        focusConfirm: false,
                        confirmButtonColor: '#004d40',
                        preConfirm: () => {
                          return {
                            title: (document.getElementById('title') as HTMLInputElement).value,
                            content: (document.getElementById('content') as HTMLTextAreaElement).value,
                            category: (document.getElementById('category') as HTMLSelectElement).value,
                          };
                        }
                      }).then((result) => {
                        if (result.isConfirmed) {
                          setNotices(notices.map(n => 
                            n.id === notice.id 
                              ? { ...n, ...result.value }
                              : n
                          ));
                          Swal.fire('Updated!', 'Notice has been updated.', 'success');
                        }
                      });
                    }}
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button 
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    onClick={() => handleDelete(notice.id)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}