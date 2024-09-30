// pages/devices.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout'; // Assuming you have the Layout component for the navbar

export default function DevicesPage() {
  const router = useRouter();

  // Check authentication before rendering the page
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth');
    if (!isAuthenticated) {
      router.push('/'); // Redirect to login if not authenticated
    }
  }, [router]);

  const devices = [
    { status: 'On', name: 'MP-ELSA Elanders', mode: 'Regular', reference: '210V', actual: '215V' },
  ];

  return (
    <Layout>
      <div className="container">
        <h1>Devices</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Name</th>
              <th>Mode</th>
              <th>Reference</th>
              <th>Actual</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, index) => (
              <tr key={index}>
                <td>{device.status}</td>
                <td>
                  <a href={`/dashboard?device=${device.name}`}>{device.name}</a>
                </td>
                <td>{device.mode}</td>
                <td>{device.reference}</td>
                <td>{device.actual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
