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
        data: [1000, 900, 800, 700, 600, 500, 500, 600, 700, 800, 900, 1000],
        backgroundColor: 'rgba(255, 165, 0, 0.8)', // Orange bars
        borderColor: 'rgba(255, 165, 0, 1)',
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        type: 'bar' as const,
        label: 'Erzeugte Wärmeenergie (kWh)',
        data: [3000, 2700, 2600, 2500, 1500, 1200, 1200, 1200, 1700, 2400, 2600, 3000],
        backgroundColor: 'rgba(255, 99, 132, 0.8)', // Red-orange bars
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        type: 'line' as const,
        label: 'Jahresarbeitszahl (JAZ)',
        data: [2.5, 2.7, 2.9, 3.3, 3.6, 3.9, 4.0, 3.9, 3.6, 3.2, 2.8, 2.5],
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
        display: true,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: "Energieverbrauch, Wärmeenergie und temperaturabhängige Jahresarbeitszahl (JAZ)",
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: "Energie (kWh)",
        },
        ticks: {
          stepSize: 500, // Adjust this based on y-axis increment in the screenshot
        },
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: "Jahresarbeitszahl (JAZ)",
          color: "red",
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: "red",
          stepSize: 0.2, // Set the step size as in the screenshot
          font: {
            size: 12, // Adjust the font size if needed
          },
        },
        min: 2.4, // Ensure the y1 scale starts at 2.0
        max: 4, // Set the maximum value to 4.0
      },
      x: {
        title: {
          display: true,
          text: "Monate",
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
              <div style={{ height: '500px', width: '100%' }}>
                <Chart type="bar" data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
