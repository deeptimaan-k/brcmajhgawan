import { Search, Download } from 'lucide-react';

export function ResultCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Check Results</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Roll Number
          </label>
          <input
            type="text"
            id="rollNumber"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
            placeholder="Enter your roll number"
          />
        </div>
        
        <div>
          <label htmlFor="examType" className="block text-sm font-medium text-gray-700 mb-1">
            Examination
          </label>
          <select
            id="examType"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
          >
            <option value="">Select examination</option>
            <option value="half-yearly">Half Yearly Examination</option>
            <option value="annual">Annual Examination</option>
            <option value="quarterly">Quarterly Examination</option>
          </select>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 bg-[#004d40] text-white px-4 py-2 rounded-lg hover:bg-[#003d33] transition-colors"
          >
            <Search className="w-5 h-5" />
            View Result
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download
          </button>
        </div>
      </form>
    </div>
  );
}