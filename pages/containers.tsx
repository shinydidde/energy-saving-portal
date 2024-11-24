import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import styles from '../styles/containerdetails.module.css'; // Import CSS module

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
    { name: 'Zorneding CT', status: 'Online', mode: 'Regular', alarms: '✅', alarmType: 'green' },
    { name: 'Anzing CT', status: 'Offline', mode: 'Switch Off', alarms: '⚠️', alarmType: 'yellow' },
    { name: 'Poing CT', status: 'Not Available', mode: 'Not available', alarms: '❗', alarmType: 'red' },
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
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Container Name</th>
              <th>Status</th>
              <th>Mode</th>
              <th>Alarms</th>
            </tr>
          </thead>
          <tbody>
            {containers.map((container, index) => (
              <tr key={index}>
                <td
                  onClick={() => handleRowClick(container.name)}
                  style={{ cursor: 'pointer', color: 'blue' }}
                >
                  {container.name}
                </td>
                <td
                  onClick={() => handleRowClick(container.name)}
                  style={{ cursor: 'pointer' }}
                >
                  <span
                    className={`${styles.status} ${container.status === 'Online'
                        ? styles.online
                        : container.status === 'Not Available'
                          ? styles.notAvailable
                          : styles.offline
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
                  style={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    color:
                      container.alarmType === 'green'
                        ? 'green'
                        : container.alarmType === 'yellow'
                          ? 'orange'
                          : 'red',
                  }}
                >
                  {container.alarms}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal Popup */}
        {showModal && selectedContainer && (
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#fff',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              zIndex: 1000,
              borderRadius: '8px',
            }}
          >
            <h2
              className={`
             ${selectedContainer.alarmType === 'green'
                  ? styles.online
                  : selectedContainer.alarmType === 'yellow'
                    ? styles.yellow
                    : selectedContainer.alarmType === 'red'
                      ? styles.offline
                      : styles.notAvailable
                }
           `}
            >
              Alarm Details
            </h2>
            <p>
              <strong>Container:</strong> {selectedContainer.name}
            </p>
            <p>
              <strong>Alarm Level:</strong>{' '}
              <span
                style={{
                  color:
                    selectedContainer.alarmType === 'green'
                      ? 'green'
                      : selectedContainer.alarmType === 'yellow'
                        ? 'orange'
                        : 'red',
                }}
              >
                {selectedContainer.alarmType === 'green'
                  ? 'Normal'
                  : selectedContainer.alarmType === 'yellow'
                    ? 'Warning'
                    : 'Critical'}
              </span>
            </p>
            <button
              onClick={closeModal}
              style={{
                marginTop: '10px',
                padding: '8px 12px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>

        )}

        {/* Overlay for Modal */}
        {showModal && (
          <div
            onClick={closeModal}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
            }}
          ></div>
        )}
      </div>
    </Layout>
  );
}
