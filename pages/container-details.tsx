import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../styles/ContainerDetails.module.css';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Navbar from '@/components/Navbar';

interface Weather {
    temperature: number;
    condition: string;
    chartData: {
        labels: string[];
        datasets: { label: string; data: number[]; backgroundColor: string[] }[];
    };
}

interface Energy {
    power: number;
    prevMonth: number;
    currentMonth: number;
    percentDiff: number;
}

interface HeatPump {
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
                    temperature: 2,
                    condition: 'Windy',
                    chartData: {
                        labels: ['7/16', '8/16', '20/15', '5/14'],
                        datasets: [
                            {
                                label: 'Temperature (°C)',
                                data: [15, 12, 22, 16],
                                backgroundColor: ['#FFD700', '#32CD32', '#FF4500', '#1E90FF'],
                            },
                        ],
                    },
                },
                energy: {
                    input: { power: 22, prevMonth: 301, currentMonth: 254, percentDiff: 15.61 },
                    output: { power: 80, prevMonth: 885, currentMonth: 750, percentDiff: 15.25 },
                },
                heatPumps: [
                    { status: 'On', forwardTemp: 80, reverseTemp: 65, power: 14, energy: 123, hours: 9 },
                    { status: 'Off', forwardTemp: 50, reverseTemp: 60, power: 0, energy: 300, hours: 25 },
                    { status: 'On', forwardTemp: 79, reverseTemp: 68, power: 12, energy: 250, hours: 21 },
                    { status: 'Not Available', forwardTemp: '-', reverseTemp: '-', power: '-', energy: '-', hours: '-' },
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

    const { id, status, alarms, alarmType, mode, lastOnline, control, weather, energy, heatPumps, performance } =
        containerData;

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.layout}>
                    {/* Sidebar */}
                    <div className={styles.sidebar}>
                        <h2>Container Details</h2>
                        <p><strong>Name:</strong> {name}</p>
                        <p><strong>ID:</strong> {id}</p>
                        <p>
                            <strong>Status:</strong> <span className={styles.status}>{status}</span>
                        </p>
                        <p>
                            <strong>Alarms:</strong>{' '}
                            <span className={`${styles.alarms} ${styles[alarmType]}`}>{alarms}</span>
                        </p>
                        <p><strong>Mode:</strong> {mode}</p>
                        <p><strong>Last Online:</strong> {lastOnline}</p>
                        <div className={styles.control}>
                            <strong>Control:</strong>
                            <div
                                className={`${styles.switch} ${control ? styles.on : styles.off}`}
                                onClick={toggleControl}
                                style={{ cursor: 'pointer' }}
                            >
                                <span style={{ color: 'white', fontSize: '12px', marginLeft: control ? '25px' : '5px' }}>
                                    {control ? 'ON' : 'OFF'}
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Main Content */}
                    <div className={styles.content}>
                        {/* Energy Section */}
                        <h2>{name} Information</h2>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Power (kW)</th>
                                    <th>Prev. Month Energy (kWh)</th>
                                    <th>Current Month Energy (kWh)</th>
                                    <th>% Difference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{energy.input.power}</td>
                                    <td>{energy.input.prevMonth}</td>
                                    <td>{energy.input.currentMonth}</td>
                                    <td>{energy.input.percentDiff}</td>
                                </tr>
                                <tr>
                                    <td>{energy.output.power}</td>
                                    <td>{energy.output.prevMonth}</td>
                                    <td>{energy.output.currentMonth}</td>
                                    <td>{energy.output.percentDiff}</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Heat Pumps */}
                        <h3>Heat Pumps</h3>
                        <table className={styles.table}>
                            <thead>
                                <tr>
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

                        {/* Coefficient Of Performance */}
                        <h3>Coefficient Of Performance</h3>
                        <table className={`${styles.table} ${styles.performance}`}>
                            <thead>
                                <tr>
                                    <th>Previous Month</th>
                                    <th>Current Month</th>
                                    <th>% Difference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    onClick={() => router.push('/graph2')} // Redirect to `graph2` page
                                    style={{ cursor: 'pointer' }} // Indicate clickable row
                                >
                                    <td>{performance.prevMonth}</td>
                                    <td>{performance.currentMonth}</td>
                                    <td>{performance.percentDiff}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    {/* Weather Section */}
                    <div className={styles.weather}>
                        <h2>Weather Information</h2>
                        <p><strong>Location:</strong> {name}</p>
                        <p className={styles.temperature}>{weather.temperature}°C</p>
                        <p>{weather.condition}</p>
                        <div className={styles.chart}>
                            <Bar data={weather.chartData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
