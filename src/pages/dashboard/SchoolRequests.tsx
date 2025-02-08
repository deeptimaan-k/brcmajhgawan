import { useState } from 'react';
import { Check, X, Eye } from 'lucide-react';
import Swal from 'sweetalert2';

interface SchoolRequest {
  id: string;
  schoolName: string;
  email: string;
  phone: string;
  address: string;
  principalName: string;
  requestDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

export function SchoolRequests() {
  const [requests, setRequests] = useState<SchoolRequest[]>([
    {
      id: '1',
      schoolName: 'City Public School',
      email: 'city.public@example.com',
      phone: '1234567890',
      address: '123 Main St, City',
      principalName: 'John Doe',
      requestDate: '2024-03-15',
      status: 'pending',
    },
  ]);

  const handleViewDetails = (request: SchoolRequest) => {
    Swal.fire({
      title: 'School Registration Details',
      html: `
        <div class="text-left">
          <p><strong>School Name:</strong> ${request.schoolName}</p>
          <p><strong>Principal:</strong> ${request.principalName}</p>
          <p><strong>Email:</strong> ${request.email}</p>
          <p><strong>Phone:</strong> ${request.phone}</p>
          <p><strong>Address:</strong> ${request.address}</p>
          <p><strong>Request Date:</strong> ${request.requestDate}</p>
        </div>
      `,
      confirmButtonColor: '#004d40',
    });
  };

  const handleApprove = (id: string) => {
    Swal.fire({
      title: 'Approve Registration?',
      text: 'This will approve the school registration request',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#004d40',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, approve it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setRequests(requests.map(request => 
          request.id === id 
            ? { ...request, status: 'approved' } 
            : request
        ));
        Swal.fire(
          'Approved!',
          'The school registration has been approved.',
          'success'
        );
      }
    });
  };

  const handleReject = (id: string) => {
    Swal.fire({
      title: 'Reject Registration?',
      text: 'This will reject the school registration request',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, reject it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setRequests(requests.map(request => 
          request.id === id 
            ? { ...request, status: 'rejected' } 
            : request
        ));
        Swal.fire(
          'Rejected!',
          'The school registration has been rejected.',
          'success'
        );
      }
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">School Registration Requests</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">{request.schoolName}</h3>
                <p className="text-sm text-gray-600">Principal: {request.principalName}</p>
                <p className="text-sm text-gray-600">Request Date: {request.requestDate}</p>
                <span className={`
                  inline-block px-2 py-1 text-xs rounded-full mt-2
                  ${request.status === 'approved' 
                    ? 'bg-green-100 text-green-800' 
                    : request.status === 'rejected'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'}
                `}>
                  {request.status.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleViewDetails(request)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  title="View Details"
                >
                  <Eye className="w-5 h-5" />
                </button>
                {request.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleApprove(request.id)}
                      className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                      title="Approve"
                    >
                      <Check className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleReject(request.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      title="Reject"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}

          {requests.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No pending registration requests
            </div>
          )}
        </div>
      </div>
    </div>
  );
}