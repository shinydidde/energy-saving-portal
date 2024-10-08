// components/Navbar.tsx
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('auth'); // Remove authentication from localStorage
    router.push('/'); // Redirect to the login page
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navItems}>
        <Link className={styles.navLink} href="/devices">Devices</Link>
      </div>
      <button className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}
