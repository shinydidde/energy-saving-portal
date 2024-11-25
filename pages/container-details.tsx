import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'chart.js/auto';
import Navbar from '@/components/Navbar';
import Modal from '@/components/Modal';
import WeatherInformation from '@/components/WeatherWidget';

interface Weather {
  temperature: number;
  condition: string;
  chartData: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      fill: boolean;
      tension: number;
    }>;
  };
}

interface Energy {
  power: number;
  prevMonth: number;
  currentMonth: number;
  percentDiff: number;
}

interface HeatPump {
  name: string;
  status: string;
  forwardTemp: number | string;
  reverseTemp: number | string;
  power: number | string;
  energy: number | string;
  hours: number | string;
}

interface Performance {
  prevMonth: number;
  currentMonth: number;
  percentDiff: number;
}

interface ContainerData {
  id: string;
  status: string;
  alarms: string;
  alarmType: 'green' | 'yellow' | 'red';
  mode: string;
  lastOnline: string;
  control: boolean;
  weather: Weather;
  energy: {
    input: Energy;
    output: Energy;
  };
  heatPumps: HeatPump[];
  performance: Performance;
}

export default function ContainerDetails() {
  const router = useRouter();
  const { name } = router.query;

  const [containerData, setContainerData] = useState<ContainerData | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedAlarm, setSelectedAlarm] = useState<{ name: string; alarmType: string } | null>(null);

  useEffect(() => {
    if (name) {
      setContainerData({
        id: '14962',
        status: 'Online',
        alarms: '⚠️',
        alarmType: 'yellow',
        mode: 'Regular',
        lastOnline: '21-Nov-2024 11:06',
        control: true,
        weather: {
          temperature: 14,
          condition: 'Windy',
          chartData: {
            labels: ['7/16', '8/16', '20/15', '5/14'],
            datasets: [
              {
                label: 'Temperature (°C)',
                data: [15, 12, 22, 16],
                borderColor: '#1E90FF',
                backgroundColor: 'rgba(30, 144, 255, 0.2)',
                fill: true,
                tension: 0.4,
              },
            ],
          },
        },
        energy: {
          input: { power: 22, prevMonth: 301, currentMonth: 254, percentDiff: 15.61 },
          output: { power: 80, prevMonth: 885, currentMonth: 750, percentDiff: 15.25 },
        },
        heatPumps: [
          { name: 'Heat Pump 1', status: 'On', forwardTemp: 80, reverseTemp: 65, power: 14, energy: 123, hours: 9 },
          { name: 'Heat Pump 2', status: 'Off', forwardTemp: 50, reverseTemp: 60, power: 0, energy: 300, hours: 25 },
          { name: 'Heat Pump 3', status: 'On', forwardTemp: 79, reverseTemp: 68, power: 12, energy: 250, hours: 21 },
          { name: 'Heat Pump 4', status: 'Not Available', forwardTemp: '-', reverseTemp: '-', power: '-', energy: '-', hours: '-' },
        ],
        performance: { prevMonth: 3.5, currentMonth: 3.1, percentDiff: 11.43 },
      });
    }
  }, [name]);

  if (!containerData) {
    return <p>Loading...</p>;
  }

  const toggleControl = () => {
    if (containerData) {
      setContainerData({ ...containerData, control: !containerData.control });
    }
  };

  const handleAlarmClick = () => {
    setSelectedAlarm({ name: name as string, alarmType: containerData.alarmType });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedAlarm(null);
  };

  const { id, status, alarms, alarmType, mode, lastOnline, control, energy, heatPumps, performance } = containerData;

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Container Details</h5>
                <p>
                  <strong>Name:</strong> {name}
                </p>
                <p>
                  <strong>ID:</strong> {id}
                </p>
                <p>
                  <strong>Status:</strong>{' '}
                  <span className={`fw-bold ${status === 'Online' ? 'text-success' : status === 'Not Available' ? 'text-secondary' : 'text-danger'}`}>
                    {status}
                  </span>
                </p>
                <p>
                  <strong>Alarms:</strong>{' '}
                  <span
                    className={`fw-bold ${alarmType === 'green' ? 'text-success' : alarmType === 'yellow' ? 'text-warning' : 'text-danger'}`}
                    style={{ cursor: 'pointer' }}
                    onClick={handleAlarmClick}
                  >
                    {alarms}
                  </span>
                </p>
                <p>
                  <strong>Mode:</strong> {mode}
                </p>
                <p>
                  <strong>Last Online:</strong> {lastOnline}
                </p>
              </div>
            </div>
            <div className="card mt-2">
              <div className="card-body d-flex align-items-center">
                <strong>Control:</strong>
                <div
                  className={`d-inline-block ms-2 ${control ? 'bg-success' : 'bg-danger'}`}
                  style={{
                    width: '50px',
                    height: '25px',
                    borderRadius: '15px',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                  onClick={toggleControl}
                >
                  <div
                    className="bg-white"
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      left: control ? 'calc(100% - 25px)' : '5px',
                      transition: 'left 0.3s ease',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-6 col-md-8 mb-4">
            <h4 className="mb-3">{name} Information</h4>
            <table className="table table-bordered mb-4">
              <thead className="table-light">
                <tr>
                  <th></th>
                  <th>Power (kW)</th>
                  <th>Prev. Month Energy (kWh)</th>
                  <th>Current Month Energy (kWh)</th>
                  <th>% Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ cursor: 'pointer' }} onClick={() => router.push('/graph2')}>
                  <td>Input</td>
                  <td>{energy.input.power}</td>
                  <td>{energy.input.prevMonth}</td>
                  <td>{energy.input.currentMonth}</td>
                  <td>{energy.input.percentDiff}</td>
                </tr>
                <tr style={{ cursor: 'pointer' }} onClick={() => router.push('/graph2')}>
                  <td>Output</td>
                  <td>{energy.output.power}</td>
                  <td>{energy.output.prevMonth}</td>
                  <td>{energy.output.currentMonth}</td>
                  <td>{energy.output.percentDiff}</td>
                </tr>
              </tbody>
            </table>

            <h5 className="mb-3">Heat Pumps</h5>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Forward Temp (°C)</th>
                    <th>Reverse Temp (°C)</th>
                    <th>Power (kW)</th>
                    <th>Energy (kWh)</th>
                    <th>Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {heatPumps.map((pump, index) => (
                    <tr key={index}>
                      <td>{pump.name}</td>
                      <td>{pump.status}</td>
                      <td>{pump.forwardTemp}</td>
                      <td>{pump.reverseTemp}</td>
                      <td>{pump.power}</td>
                      <td>{pump.energy}</td>
                      <td>{pump.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h5 className="mb-3">Coefficient Of Performance</h5>
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Previous Month</th>
                  <th>Current Month</th>
                  <th>% Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ cursor: 'pointer' }} onClick={() => router.push('/graph1')}>
                  <td>{performance.prevMonth}</td>
                  <td>{performance.currentMonth}</td>
                  <td>{performance.percentDiff}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Weather Section */}
          <WeatherInformation weather={containerData.weather} />
        </div>

        {/* Modal */}
        <Modal isOpen={showModal} onClose={closeModal} containerData={selectedAlarm} />
      </div>
    </>
  );
}
