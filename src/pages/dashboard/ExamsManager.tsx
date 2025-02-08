import { useState } from 'react';
import { Plus, Trash2, Edit } from 'lucide-react';
import Swal from 'sweetalert2';

interface Exam {
  id: string;
  subject: string;
  date: string;
  time: string;
  class: string;
}

export function ExamsManager() {
  const [exams, setExams] = useState<Exam[]>([
    {
      id: '1',
      subject: 'Mathematics',
      date: '2024-03-15',
      time: '10:00 AM - 1:00 PM',
      class: 'Class 8',
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
        setExams(exams.filter(exam => exam.id !== id));
        Swal.fire(
          'Deleted!',
          'The exam has been deleted.',
          'success'
        );
      }
    });
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const newExam: Exam = {
      id: Date.now().toString(),
      subject: formData.get('subject') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      class: formData.get('class') as string,
    };

    setExams([...exams, newExam]);
    form.reset();
    
    Swal.fire({
      icon: 'success',
      title: 'Exam Added',
      text: 'New exam has been successfully added',
      confirmButtonColor: '#004d40',
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Exam Manager</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Exam</h2>
        
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <input
            type="date"
            name="date"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <input
            type="text"
            name="time"
            placeholder="Time (e.g., 10:00 AM - 1:00 PM)"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <input
            type="text"
            name="class"
            placeholder="Class"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <button
            type="submit"
            className="md:col-span-2 flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Exam
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Exam Schedule</h2>
        
        <div className="space-y-4">
          {exams.map((exam) => (
            <div key={exam.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">{exam.subject}</h3>
                <p className="text-sm text-gray-600">
                  {exam.date} | {exam.time} | {exam.class}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  onClick={() => {
                    Swal.fire({
                      title: 'Edit Exam',
                      html: `
                        <input id="subject" class="swal2-input" placeholder="Subject" value="${exam.subject}">
                        <input id="date" class="swal2-input" type="date" value="${exam.date}">
                        <input id="time" class="swal2-input" placeholder="Time" value="${exam.time}">
                        <input id="class" class="swal2-input" placeholder="Class" value="${exam.class}">
                      `,
                      focusConfirm: false,
                      confirmButtonColor: '#004d40',
                      preConfirm: () => {
                        return {
                          subject: (document.getElementById('subject') as HTMLInputElement).value,
                          date: (document.getElementById('date') as HTMLInputElement).value,
                          time: (document.getElementById('time') as HTMLInputElement).value,
                          class: (document.getElementById('class') as HTMLInputElement).value,
                        };
                      }
                    }).then((result) => {
                      if (result.isConfirmed) {
                        setExams(exams.map(e => 
                          e.id === exam.id 
                            ? { ...e, ...result.value }
                            : e
                        ));
                        Swal.fire('Updated!', 'Exam has been updated.', 'success');
                      }
                    });
                  }}
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button 
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  onClick={() => handleDelete(exam.id)}
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