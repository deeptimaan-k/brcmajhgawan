import { useState } from 'react';
import { Plus, Trash2, Edit, Download } from 'lucide-react';
import Swal from 'sweetalert2';

interface Result {
  id: string;
  studentName: string;
  rollNumber: string;
  class: string;
  exam: string;
  percentage: string;
  status: 'pass' | 'fail';
}

export function ResultsManager() {
  const [results, setResults] = useState<Result[]>([
    {
      id: '1',
      studentName: 'John Doe',
      rollNumber: '2024001',
      class: 'Class 8',
      exam: 'Half Yearly',
      percentage: '85%',
      status: 'pass',
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
        setResults(results.filter(result => result.id !== id));
        Swal.fire(
          'Deleted!',
          'The result has been deleted.',
          'success'
        );
      }
    });
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const newResult: Result = {
      id: Date.now().toString(),
      studentName: formData.get('studentName') as string,
      rollNumber: formData.get('rollNumber') as string,
      class: formData.get('class') as string,
      exam: formData.get('exam') as string,
      percentage: `${formData.get('percentage')}%`,
      status: Number(formData.get('percentage')) >= 33 ? 'pass' : 'fail',
    };

    setResults([...results, newResult]);
    form.reset();
    
    Swal.fire({
      icon: 'success',
      title: 'Result Added',
      text: 'New result has been successfully added',
      confirmButtonColor: '#004d40',
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Results Manager</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Result</h2>
        
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="studentName"
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
          <input
            type="text"
            name="class"
            placeholder="Class"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <select
            name="exam"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          >
            <option value="">Select Exam</option>
            <option value="Half Yearly">Half Yearly</option>
            <option value="Annual">Annual</option>
            <option value="Quarterly">Quarterly</option>
          </select>
          <input
            type="number"
            name="percentage"
            placeholder="Percentage"
            min="0"
            max="100"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          />
          <button
            type="submit"
            className="md:col-span-2 flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Result
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Results List</h2>
        
        <div className="space-y-4">
          {results.map((result) => (
            <div key={result.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">{result.studentName}</h3>
                <p className="text-sm text-gray-600">
                  Roll No: {result.rollNumber} | Class: {result.class}
                </p>
                <p className="text-sm text-gray-600">
                  Exam: {result.exam} | Percentage: {result.percentage}
                </p>
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  result.status === 'pass' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {result.status.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                  onClick={() => {
                    Swal.fire({
                      title: 'Download Result',
                      text: 'This would download the result in PDF format',
                      icon: 'info',
                      confirmButtonColor: '#004d40',
                    });
                  }}
                >
                
                  <Download className="w-5 h-5" />
                </button>
                <button 
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  onClick={() => {
                    Swal.fire({
                      title: 'Edit Result',
                      html: `
                        <input id="studentName" class="swal2-input" placeholder="Student Name" value="${result.studentName}">
                        <input id="rollNumber" class="swal2-input" placeholder="Roll Number" value="${result.rollNumber}">
                        <input id="class" class="swal2-input" placeholder="Class" value="${result.class}">
                        <input id="exam" class="swal2-input" placeholder="Exam" value="${result.exam}">
                        <input id="percentage" class="swal2-input" type="number" placeholder="Percentage" value="${result.percentage.replace('%', '')}">
                      `,
                      focusConfirm: false,
                      confirmButtonColor: '#004d40',
                      preConfirm: () => {
                        const percentage = (document.getElementById('percentage') as HTMLInputElement).value;
                        return {
                          studentName: (document.getElementById('studentName') as HTMLInputElement).value,
                          rollNumber: (document.getElementById('rollNumber') as HTMLInputElement).value,
                          class: (document.getElementById('class') as HTMLInputElement).value,
                          exam: (document.getElementById('exam') as HTMLInputElement).value,
                          percentage: `${percentage}%`,
                          status: Number(percentage) >= 33 ? 'pass' : 'fail',
                        };
                      }
                    }).then((result) => {
                      if (result.isConfirmed) {
                        setResults(results.map(r => 
                          r.id === result.id ? { ...r, ...result.value } : r
                        ));
                        Swal.fire('Updated!', 'Result has been updated.', 'success');
                      }
                    });
                  }}
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button 
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  onClick={() => handleDelete(result.id)}
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