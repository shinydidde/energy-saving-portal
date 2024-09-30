// pages/index.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/Login.module.css'; // CSS module for login styling

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Redirect if already authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth');
    if (isAuthenticated) {
      router.push('/devices'); // Redirect to devices page if already logged in
    }
  }, [router]);

  // Handle the login logic
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock login validation
    if (email === 'dhqguest01@ops-systeme.de' && password === 'password') {
      localStorage.setItem('auth', 'true'); // Store login status in localStorage
      router.push('/devices'); // Redirect to devices page after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.logo}>
            <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={100}
            />
        </div>
        <h2 className={styles.h2}>eco2web</h2>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
        <div className={styles.footer}>
          <a href="#">Forgot password?</a>
        </div>
      </form>
    </div>
  );
}
