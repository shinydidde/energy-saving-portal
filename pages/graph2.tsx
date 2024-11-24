import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from '../styles/YearComparison.module.css';
import Navbar from '@/components/Navbar';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function YearComparison() {
    // Chart data
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: '2020',
                data: [351400, 252933, 243850, 184666, 171433, 132833, 97400, 102183, 124650, 231700, 283900, 362900],
                backgroundColor: '#ffcc00', // Yellow
            },
            {
                label: '2021',
                data: [315650, 293275, 268450, 232650, 147116, 103900, 95683, 87416, 94100, 154716, 185900, 326300],
                backgroundColor: '#3366cc', // Blue
            },
            {
                label: '2022',
                data: [364150, 297700, 285750, 221050, 114000, 91050, 70500, 70800, 129700, 156566, 234583, 364150],
                backgroundColor: '#109618', // Green
            },
            {
                label: '2023',
                data: [399400, 298400, 317800, 317800, 199750, 124850, 78000, 129700, 217150, 306300, 305950, 399400],
                backgroundColor: '#ff6f61', // Red
            },
            {
                label: '2024',
                data: [351400, 253150, 253150, 171433, 138633, 114175, 86675, 131250, 217150, 138450, 229250, 351400],
                backgroundColor: '#ff9900', // Orange
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const, // Explicitly specify 'top' as a literal type
            },
            title: {
                display: true,
                text: 'Jahresarbeitzahl',
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Energy (kWh)',
                },
            },
        },
    };


    // Table data
    const tableData = [
        {
            year: '2020',
            jan: '351,400.00',
            feb: '252,933.33',
            mar: '243,850.00',
            dec: '362,900.00',
            avg: '182,072.73',
            max: '362,900.00',
        },
        {
            year: '2021',
            jan: '315,650.00',
            feb: '293,275.00',
            mar: '268,450.00',
            dec: '326,300.00',
            avg: '175,273.48',
            max: '326,300.00',
        },
        {
            year: '2022',
            jan: '364,150.00',
            feb: '297,700.00',
            mar: '285,750.00',
            dec: '364,150.00',
            avg: '198,250.00',
            max: '364,150.00',
        },
        {
            year: '2023',
            jan: '399,400.00',
            feb: '298,400.00',
            mar: '317,800.00',
            dec: '399,400.00',
            avg: '198,509.03',
            max: '399,400.00',
        },
        {
            year: '2024',
            jan: '351,400.00',
            feb: '253,150.00',
            mar: '253,150.00',
            dec: '351,400.00',
            avg: '175,273.48',
            max: '351,400.00',
        },
    ];

    return (
        <>
        <Navbar/>
            <div className={styles.container}>
                <div className={styles.chartContainer}>
                    <Bar data={data} options={options} />
                </div>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Jan</th>
                                <th>Feb</th>
                                <th>Mar</th>
                                <th>Dec</th>
                                <th>Avg</th>
                                <th>Max</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.year}</td>
                                    <td>{row.jan}</td>
                                    <td>{row.feb}</td>
                                    <td>{row.mar}</td>
                                    <td>{row.dec}</td>
                                    <td>{row.avg}</td>
                                    <td>{row.max}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
