import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Modal from '../components/Modal'; // Import Modal component

export default function ContainersPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selectedContainer, setSelectedContainer] = useState<{ name: string; alarmType: string } | null>(null);

  // Check authentication before rendering the page
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth');
    if (!isAuthenticated) {
      router.push('/'); // Redirect to login if not authenticated
    }
  }, [router]);

  const containers = [
    { name: 'Container 1', status: 'Online', mode: 'Regular', alarms: '✅', alarmType: 'green' },
    { name: 'Container 2', status: 'Offline', mode: 'Switch Off', alarms: '⚠️', alarmType: 'yellow' },
    { name: 'Container 3', status: 'Not Available', mode: 'Not available', alarms: '❗', alarmType: 'red' },
  ];

  const handleRowClick = (name: string) => {
    router.push(`/container-details?name=${name}`);
  };

  const handleAlarmClick = (container: { name: string; alarmType: string }) => {
    setSelectedContainer(container);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedContainer(null);
  };

  return (
    <Layout>
      <div className="container py-4">
        <h1 className="text-center mb-4">Containers List</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Container Name</th>
                <th>Status</th>
                <th>Mode</th>
                <th className='text-center'>Alarms</th>
              </tr>
            </thead>
            <tbody>
              {containers.map((container, index) => (
                <tr key={index}>
                  <td
                    onClick={() => handleRowClick(container.name)}
                    className="text-decoration-none "
                    style={{ cursor: 'pointer' }}
                  >
                    {container.name}
                  </td>
                  <td
                    onClick={() => handleRowClick(container.name)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span
                      className={`fw-bold ${
                        container.status === 'Online'
                          ? 'text-success'
                          : container.status === 'Not Available'
                          ? 'text-secondary'
                          : 'text-danger'
                      }`}
                    >
                      {container.status}
                    </span>
                  </td>
                  <td onClick={() => handleRowClick(container.name)} style={{ cursor: 'pointer' }}>
                    {container.mode}
                  </td>
                  <td
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAlarmClick({ name: container.name, alarmType: container.alarmType });
                    }}
                    className={`fw-bold text-center ${
                      container.alarmType === 'green'
                        ? 'text-success'
                        : container.alarmType === 'yellow'
                        ? 'text-warning'
                        : 'text-danger'
                    }`}
                    style={{ cursor: 'pointer' }}
                  >
                    {container.alarms}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reusable Modal Component */}
        <Modal isOpen={showModal} onClose={closeModal} containerData={selectedContainer} />
      </div>
    </Layout>
  );
}
