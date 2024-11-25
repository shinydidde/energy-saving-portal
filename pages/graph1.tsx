import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

export default function Jahresarbeitzahl() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        type: 'bar' as const,
        label: 'Energieverbrauch (kWh)',
        data: [500, 800, 900, 1500, 2000, 2500, 2700, 2000, 1700, 1200, 800, 400],
        backgroundColor: 'rgba(255, 165, 0, 0.8)', // Orange bars
        borderColor: 'rgba(255, 165, 0, 1)',
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        type: 'bar' as const,
        label: 'Erzeugte Wärmeenergie (kWh)',
        data: [700, 1000, 1100, 1800, 2400, 2800, 3000, 2500, 2100, 1600, 1000, 600],
        backgroundColor: 'rgba(255, 99, 132, 0.8)', // Red-orange bars
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        type: 'line' as const,
        label: 'Jahresarbeitszahl (JAZ)',
        data: [2.6, 2.8, 3.0, 3.2, 3.4, 3.8, 4.0, 3.7, 3.5, 3.3, 2.9, 2.6],
        borderColor: 'red',
        backgroundColor: 'red',
        pointBackgroundColor: 'red',
        pointBorderColor: 'red',
        borderWidth: 2,
        yAxisID: 'y1',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Energieverbrauch, Wärmeenergie und temperaturabhängige Jahresarbeitszahl (JAZ)',
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Energie (kWh)',
        },
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Jahresarbeitszahl (JAZ)',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card">
            <div className="card-body">
              <div style={{ height: '500px' }}>
                <Chart type="bar" data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
