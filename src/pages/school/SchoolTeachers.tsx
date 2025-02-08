import { useState } from 'react';
import { Plus, Trash2, Edit, Search } from 'lucide-react';
import Swal from 'sweetalert2';

interface Teacher {
  id: string;
  name: string;
  ehrmsCode: string;
  designation: string;
  subject: string;
  qualification: string;
  phone: string;
  email: string;
  joiningDate: string;
}

export function SchoolTeachers() {
  const [teachers, setTeachers] = useState<Teacher[]>([
    {
      id: '1',
      name: 'Amit Kumar',
      ehrmsCode: 'EMP123456',
      designation: 'Assistant Teacher',
      subject: 'Mathematics',
      qualification: 'M.Sc., B.Ed.',
      phone: '9876543210',
      email: 'amit.kumar@example.com',
      joiningDate: '2020-06-15',
    },
  ]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const newTeacher: Teacher = {
      id: Date.now().toString(),
      name: formData.get('name') as string,
      ehrmsCode: formData.get('ehrmsCode') as string,
      designation: formData.get('designation') as string,
      subject: formData.get('subject') as string,
      qualification: formData.get('qualification') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      joiningDate: formData.get('joiningDate') as string,
    };

    setTeachers([...teachers, newTeacher]);
    form.reset();
    
    Swal.fire({
      icon: 'success',
      title: 'Teacher Added',
      text: 'New teacher has been successfully added',
      confirmButtonColor: '#004d40',
    });
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Delete Teacher?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setTeachers(teachers.filter(teacher => teacher.id !== id));
        Swal.fire('Deleted!', 'Teacher has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Teacher Management</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Teacher</h2>
        
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Teacher Name"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <input
            type="text"
            name="ehrmsCode"
            placeholder="EHRMS Code"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <select
            name="designation"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          >
            <option value="">Select Designation</option>
            <option value="Assistant Teacher">Assistant Teacher</option>
            <option value="Shiksha Mitra">Shiksha Mitra</option>
            <option value="Anudeshak">Anudeshak</option>
          </select>
          <input
            type="text"
            name="subject"
            placeholder="Subject Specialization"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <input
            type="date"
            name="joiningDate"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <button
            type="submit"
            className="md:col-span-2 flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Teacher
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Teacher List</h2>
          <div className="relative">
            <input
              type="search"
              placeholder="Search teachers..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        
        <div className="space-y-4">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{teacher.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    EHRMS Code: {teacher.ehrmsCode} | {teacher.designation}
                  </p>
                  <p className="text-sm text-gray-600">
                    Subject: {teacher.subject} | Qualification: {teacher.qualification}
                  </p>
                  <p className="text-sm text-gray-600">
                    Phone: {teacher.phone} | Email: {teacher.email}
                  </p>
                  <p className="text-sm text-gray-600">
                    Joining Date: {new Date(teacher.joiningDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    onClick={() => {
                      Swal.fire({
                        title: 'Edit Teacher',
                        html: `
                          <input id="name" class="swal2-input" placeholder="Name" value="${teacher.name}">
                          <input id="designation" class="swal2-input" placeholder="Designation" value="${teacher.designation}">
                          <input id="subject" class="swal2-input" placeholder="Subject" value="${teacher.subject}">
                          <input id="phone" class="swal2-input" placeholder="Phone" value="${teacher.phone}">
                        `,
                        focusConfirm: false,
                        confirmButtonColor: '#004d40',
                        preConfirm: () => {
                          return {
                            name: (document.getElementById('name') as HTMLInputElement).value,
                            designation: (document.getElementById('designation') as HTMLInputElement).value,
                            subject: (document.getElementById('subject') as HTMLInputElement).value,
                            phone: (document.getElementById('phone') as HTMLInputElement).value,
                          };
                        }
                      }).then((result) => {
                        if (result.isConfirmed) {
                          setTeachers(teachers.map(t => 
                            t.id === teacher.id 
                              ? { ...t, ...result.value }
                              : t
                          ));
                          Swal.fire('Updated!', 'Teacher has been updated.', 'success');
                        }
                      });
                    }}
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button 
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    onClick={() => handleDelete(teacher.id)}
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