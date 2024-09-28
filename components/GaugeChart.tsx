// components/GaugeChart.tsx
import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

Chart.register(ArcElement, Tooltip, Legend);

interface GaugeChartProps {
  savings: number;
}

export default function GaugeChart({ savings }: GaugeChartProps) {
  const data = {
    datasets: [
      {
        data: [savings, 100 - savings], // Savings and remaining percentage
        backgroundColor: ['#4caf50', '#e0e0e0'], // Green and light grey
        borderWidth: 0, // No borders
        cutout: '80%', // The hole in the middle
        rotation: -90, // Start the chart at the top
        circumference: 180, // Only draw half the chart (180 degrees)
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    rotation: -90, // Start from the top
    circumference: 180, // Half circle
  };

  return (
    <div className="doughnut-container" style={{ position: 'relative', height: '200px', width: '400px' }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >
        {savings}%
      </div>
    </div>
  );
}
