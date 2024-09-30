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
        data: [savings, 100 - savings],
        backgroundColor: ['#4caf50', '#e0e0e0'],
        borderWidth: 0,
        cutout: '80%',
        rotation: -90,
        circumference: 180,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    rotation: -90,
    circumference: 180,
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
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >
        {savings}%
      </div>
    </div>
  );
}
