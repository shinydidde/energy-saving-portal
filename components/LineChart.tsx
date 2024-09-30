// components/LineChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function LineChart() {
  // Simulate large dataset for multiple phases (L1, L2, L3) over time
  const generateLargeDataset = () => {
    const labels = [];
    const l1DataIn = [];
    const l1DataOut = [];
    const l2DataIn = [];
    const l2DataOut = [];
    const l3DataIn = [];
    const l3DataOut = [];

    // Generate data points over a period of 6 hours (simulated)
    for (let i = 0; i <= 360; i++) {
      // Each entry is spaced by 1 minute (i.e., 6 hours = 360 minutes)
      labels.push(`Time ${i}`);

      // Simulate voltage data for input and output across phases
      l1DataIn.push(100 + Math.random() * 20);  // L1 Input fluctuating around 100-120V
      l1DataOut.push(105 + Math.random() * 20); // L1 Output fluctuating around 105-125V

      l2DataIn.push(200 + Math.random() * 30);  // L2 Input fluctuating around 200-230V
      l2DataOut.push(210 + Math.random() * 30); // L2 Output fluctuating around 210-240V

      l3DataIn.push(300 + Math.random() * 40);  // L3 Input fluctuating around 300-340V
      l3DataOut.push(310 + Math.random() * 40); // L3 Output fluctuating around 310-350V
    }

    return {
      labels,
      datasets: [
        {
          label: 'L1 in',
          data: l1DataIn,
          borderColor: 'blue',
          borderWidth: 1,
          fill: false,
        },
        {
          label: 'L1 out',
          data: l1DataOut,
          borderColor: 'green',
          borderWidth: 1,
          fill: false,
        },
        {
          label: 'L2 in',
          data: l2DataIn,
          borderColor: 'red',
          borderWidth: 1,
          fill: false,
        },
        {
          label: 'L2 out',
          data: l2DataOut,
          borderColor: 'orange',
          borderWidth: 1,
          fill: false,
        },
        {
          label: 'L3 in',
          data: l3DataIn,
          borderColor: 'purple',
          borderWidth: 1,
          fill: false,
        },
        {
          label: 'L3 out',
          data: l3DataOut,
          borderColor: 'yellow',
          borderWidth: 1,
          fill: false,
        },
      ],
    };
  };

  // Chart options
  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Time (minutes)',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Voltage (V)',
        },
      },
    },
  };

  const data = generateLargeDataset();

  return (
    <div>
      <Line data={data} options={options} />
      <div className="text-center mt-3">
        <button className="btn btn-success">Download as CSV</button>
      </div>
    </div>
  );
}
