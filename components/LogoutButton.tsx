// components/LogoutButton.tsx
import { useRouter } from 'next/router';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    router.push('/');
  };

  return (
    <button onClick={handleLogout} style={{ backgroundColor: '#60a165', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
      Logout
    </button>
  );
}
