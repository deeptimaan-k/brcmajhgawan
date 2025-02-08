import { useState } from 'react';
import { Plus, Trash2, Edit, Search } from 'lucide-react';
import Swal from 'sweetalert2';

interface Student {
  id: string;
  name: string;
  rollNumber: string;
  class: string;
  section: string;
  gender: string;
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  address: string;
}

export function SchoolStudents() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: '1',
      name: 'Rahul Kumar',
      rollNumber: '2024001',
      class: '8',
      section: 'A',
      gender: 'Male',
      fatherName: 'Rajesh Kumar',
      motherName: 'Sunita Devi',
      dateOfBirth: '2010-05-15',
      address: '123 Main St, City',
    },
  ]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const newStudent: Student = {
      id: Date.now().toString(),
      name: formData.get('name') as string,
      rollNumber: formData.get('rollNumber') as string,
      class: formData.get('class') as string,
      section: formData.get('section') as string,
      gender: formData.get('gender') as string,
      fatherName: formData.get('fatherName') as string,
      motherName: formData.get('motherName') as string,
      dateOfBirth: formData.get('dateOfBirth') as string,
      address: formData.get('address') as string,
    };

    setStudents([...students, newStudent]);
    form.reset();
    
    Swal.fire({
      icon: 'success',
      title: 'Student Added',
      text: 'New student has been successfully added',
      confirmButtonColor: '#004d40',
    });
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Delete Student?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setStudents(students.filter(student => student.id !== id));
        Swal.fire('Deleted!', 'Student has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Student Management</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Student</h2>
        
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <input
            type="text"
            name="rollNumber"
            placeholder="Roll Number"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <select
            name="class"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          >
            <option value="">Select Class</option>
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>Class {num}</option>
            ))}
          </select>
          <select
            name="section"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          >
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <select
            name="gender"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name="fatherName"
            placeholder="Father's Name"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <input
            type="text"
            name="motherName"
            placeholder="Mother's Name"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <input
            type="date"
            name="dateOfBirth"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <div className="md:col-span-2">
            <textarea
              name="address"
              placeholder="Address"
              required
              rows={3}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="md:col-span-2 flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Student
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Student List</h2>
          <div className="relative">
            <input
              type="search"
              placeholder="Search students..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        
        <div className="space-y-4">
          {students.map((student) => (
            <div key={student.id} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{student.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Roll No: {student.rollNumber} | Class: {student.class}-{student.section}
                  </p>
                  <p className="text-sm text-gray-600">
                    Father: {student.fatherName} | Mother: {student.motherName}
                  </p>
                  <p className="text-sm text-gray-600">
                    DOB: {new Date(student.dateOfBirth).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600">Address: {student.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    onClick={() => {
                      Swal.fire({
                        title: 'Edit Student',
                        html: `
                          <input id="name" class="swal2-input" placeholder="Name" value="${student.name}">
                          <input id="rollNumber" class="swal2-input" placeholder="Roll Number" value="${student.rollNumber}">
                          <input id="class" class="swal2-input" placeholder="Class" value="${student.class}">
                          <input id="section" class="swal2-input" placeholder="Section" value="${student.section}">
                        `,
                        focusConfirm: false,
                        confirmButtonColor: '#004d40',
                        preConfirm: () => {
                          return {
                            name: (document.getElementById('name') as HTMLInputElement).value,
                            rollNumber: (document.getElementById('rollNumber') as HTMLInputElement).value,
                            class: (document.getElementById('class') as HTMLInputElement).value,
                            section: (document.getElementById('section') as HTMLInputElement).value,
                          };
                        }
                      }).then((result) => {
                        if (result.isConfirmed) {
                          setStudents(students.map(s => 
                            s.id === student.id 
                              ? { ...s, ...result.value }
                              : s
                          ));
                          Swal.fire('Updated!', 'Student has been updated.', 'success');
                        }
                      });
                    }}
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button 
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    onClick={() => handleDelete(student.id)}
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