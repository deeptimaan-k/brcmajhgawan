import { useState } from 'react';
import { Plus, Trash2, Edit } from 'lucide-react';
import Swal from 'sweetalert2';

interface Holiday {
  id: string;
  name: string;
  date: string;
  type: 'gazetted' | 'restricted' | 'other';
  description: string;
}

export function HolidayManager() {
  const [holidays, setHolidays] = useState<Holiday[]>([
    {
      id: '1',
      name: 'Holi',
      date: '2024-03-25',
      type: 'gazetted',
      description: 'Festival of Colors',
    },
  ]);

  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#004d40',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setHolidays(holidays.filter(holiday => holiday.id !== id));
        Swal.fire(
          'Deleted!',
          'The holiday has been deleted.',
          'success'
        );
      }
    });
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const newHoliday: Holiday = {
      id: Date.now().toString(),
      name: formData.get('name') as string,
      date: formData.get('date') as string,
      type: formData.get('type') as Holiday['type'],
      description: formData.get('description') as string,
    };

    setHolidays([...holidays, newHoliday]);
    form.reset();
    
    Swal.fire({
      icon: 'success',
      title: 'Holiday Added',
      text: 'New holiday has been successfully added',
      confirmButtonColor: '#004d40',
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Holiday Manager</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Holiday</h2>
        
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Holiday Name"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <input
            type="date"
            name="date"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <select
            name="type"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          >
            <option value="">Select Type</option>
            <option value="gazetted">Gazetted</option>
            <option value="restricted">Restricted</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            name="description"
            placeholder="Description"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <button
            type="submit"
            className="md:col-span-2 flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Holiday
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Holiday List</h2>
        
        <div className="space-y-4">
          {holidays.map((holiday) => (
            <div key={holiday.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">{holiday.name}</h3>
                <p className="text-sm text-gray-600">
                  Date: {new Date(holiday.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">
                  {holiday.description}
                </p>
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  holiday.type === 'gazetted' 
                    ? 'bg-green-100 text-green-800'
                    : holiday.type === 'restricted'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {holiday.type.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  onClick={() => {
                    Swal.fire({
                      title: 'Edit Holiday',
                      html: `
                        <input id="name" class="swal2-input" placeholder="Holiday Name" value="${holiday.name}">
                        <input id="date" class="swal2-input" type="date" value="${holiday.date}">
                        <select id="type" class="swal2-input">
                          <option value="gazetted" ${holiday.type === 'gazetted' ? 'selected' : ''}>Gazetted</option>
                          <option value="restricted" ${holiday.type === 'restricted' ? 'selected' : ''}>Restricted</option>
                          <option value="other" ${holiday.type === 'other' ? 'selected' : ''}>Other</option>
                        </select>
                        <input id="description" class="swal2-input" placeholder="Description" value="${holiday.description}">
                      `,
                      focusConfirm: false,
                      confirmButtonColor: '#004d40',
                      preConfirm: () => {
                        return {
                          name: (document.getElementById('name') as HTMLInputElement).value,
                          date: (document.getElementById('date') as HTMLInputElement).value,
                          type: (document.getElementById('type') as HTMLSelectElement).value as Holiday['type'],
                          description: (document.getElementById('description') as HTMLInputElement).value,
                        };
                      }
                    }).then((result) => {
                      if (result.isConfirmed) {
                        setHolidays(holidays.map(h => 
                          h.id === holiday.id 
                            ? { ...h, ...result.value }
                            : h
                        ));
                        Swal.fire('Updated!', 'Holiday has been updated.', 'success');
                      }
                    });
                  }}
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button 
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  onClick={() => handleDelete(holiday.id)}
                >
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