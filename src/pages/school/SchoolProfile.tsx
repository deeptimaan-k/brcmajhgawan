import { useState } from 'react';
import { Building2, Mail, Phone, MapPin, User, Save } from 'lucide-react';
import Swal from 'sweetalert2';

export function SchoolProfile() {
  const [schoolData, setSchoolData] = useState({
    name: "City Public School",
    type: "Composite",
    udiseCode: "09070100701",
    headMaster: "John Doe",
    ehrmsCode: "EMP123456",
    phone: "+91 9876543210",
    email: "cityschool@example.com",
    address: "123 School Street, City Area",
    district: "Bareilly",
    state: "Uttar Pradesh",
    pinCode: "243001",
    establishmentYear: "1995",
    mediumOfInstruction: "Hindi",
    boardAffiliation: "UP Board",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Profile Updated',
      text: 'School profile has been successfully updated',
      confirmButtonColor: '#004d40',
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">School Profile</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">School Name</label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  value={schoolData.name}
                  onChange={(e) => setSchoolData({ ...schoolData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
                />
                <Building2 className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">School Type</label>
              <select
                value={schoolData.type}
                onChange={(e) => setSchoolData({ ...schoolData, type: e.target.value })}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
              >
                <option value="Primary">Primary</option>
                <option value="Upper Primary">Upper Primary</option>
                <option value="Composite">Composite</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">UDISE Code</label>
              <input
                type="text"
                value={schoolData.udiseCode}
                readOnly
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Establishment Year</label>
              <input
                type="text"
                value={schoolData.establishmentYear}
                onChange={(e) => setSchoolData({ ...schoolData, establishmentYear: e.target.value })}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Head Master Information */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Head Master Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Head Master Name</label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  value={schoolData.headMaster}
                  onChange={(e) => setSchoolData({ ...schoolData, headMaster: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
                />
                <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">EHRMS Code</label>
              <input
                type="text"
                value={schoolData.ehrmsCode}
                readOnly
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 relative">
                <input
                  type="email"
                  value={schoolData.email}
                  onChange={(e) => setSchoolData({ ...schoolData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
                />
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <div className="mt-1 relative">
                <input
                  type="tel"
                  value={schoolData.phone}
                  onChange={(e) => setSchoolData({ ...schoolData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
                />
                <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Address Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <div className="mt-1 relative">
                <textarea
                  value={schoolData.address}
                  onChange={(e) => setSchoolData({ ...schoolData, address: e.target.value })}
                  rows={3}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
                />
                <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">District</label>
              <input
                type="text"
                value={schoolData.district}
                onChange={(e) => setSchoolData({ ...schoolData, district: e.target.value })}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                value={schoolData.state}
                onChange={(e) => setSchoolData({ ...schoolData, state: e.target.value })}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">PIN Code</label>
              <input
                type="text"
                value={schoolData.pinCode}
                onChange={(e) => setSchoolData({ ...schoolData, pinCode: e.target.value })}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#004d40] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#004d40] text-white px-6 py-2 rounded-lg hover:bg-[#003d33] transition-colors"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}