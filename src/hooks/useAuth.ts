import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export function useAuth() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Clear any auth tokens/state here
        navigate('/login');
      }
    });
  };

  return { handleLogout };
}