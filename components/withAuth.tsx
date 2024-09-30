// components/withAuth.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';

export default function withAuth(WrappedComponent: React.ComponentType) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function AuthComponent(props: any) {
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('auth');
        if (isAuthenticated) {
          router.push('/devices'); // Redirect to devices page if logged in
        }
      }, [router]);

    return (
      <>
        <Navbar />
        <WrappedComponent {...props} />
      </>
    );
  };
}
