import { useState } from 'react';
import { Plus, Trash2, Edit, BookOpen, Calendar } from 'lucide-react';
import Swal from 'sweetalert2';

interface Subject {
  id: string;
  name: string;
  class: string;
  teacher: string;
  schedule: string[];
}

interface Exam {
  id: string;
  name: string;
  class: string;
  subject: string;
  date: string;
  time: string;
}

export function SchoolAcademic() {
  const [subjects, setSubjects] = useState<Subject[]>([
    {
      id: '1',
      name: 'Mathematics',
      class: '8',
      teacher: 'Amit Kumar',
      schedule: ['Monday - 10:00 AM', 'Wednesday - 11:00 AM', 'Friday - 9:00 AM'],
    },
  ]);

  const [exams, setExams] = useState<Exam[]>([
    {
      id: '1',
      name: 'Half Yearly Examination',
      class: '8',
      subject: 'Mathematics',
      date: '2024-03-15',
      time: '10:00 AM - 1:00 PM',
    },
  ]);

  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const newSubject: Subject = {
      id: Date.now().toString(),
      name: formData.get('name') as string,
      class: formData.get('class') as string,
      teacher: formData.get('teacher') as string,
      schedule: [formData.get('schedule') as string],
    };

    setSubjects([...subjects, newSubject]);
    form.reset();

    Swal.fire({
      icon: 'success',
      title: 'Subject Added',
      text: 'New subject has been successfully added',
      confirmButtonColor: '#004d40',
    });
  };

  const handleAddExam = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const newExam: Exam = {
      id: Date.now().toString(),
      name: formData.get('name') as string,
      class: formData.get('class') as string,
      subject: formData.get('subject') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
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
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-semibold text-gray-900">Academic Management</h1>
      
      {/* Subjects Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Subject Management</h2>
        <form onSubmit={handleAddSubject} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input type="text" name="name" placeholder="Subject Name" required className="input-field" />
          <input type="text" name="class" placeholder="Class" required className="input-field" />
          <input type="text" name="teacher" placeholder="Assigned Teacher" required className="input-field" />
          <input type="text" name="schedule" placeholder="Schedule (e.g., Monday - 10:00 AM)" required className="input-field" />
          <button type="submit" className="button"> <Plus className="w-5 h-5" /> Add Subject </button>
        </form>
      </div>

      {/* Exams Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Exam Schedule</h2>
        <form onSubmit={handleAddExam} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input type="text" name="name" placeholder="Exam Name" required className="input-field" />
          <input type="text" name="class" placeholder="Class" required className="input-field" />
          <input type="text" name="subject" placeholder="Subject" required className="input-field" />
          <input type="date" name="date" required className="input-field" />
          <input type="text" name="time" placeholder="Time (e.g., 10:00 AM - 1:00 PM)" required className="input-field" />
          <button type="submit" className="button"> <Plus className="w-5 h-5" /> Add Exam </button>
        </form>
      </div>
    </div>
  );
}
