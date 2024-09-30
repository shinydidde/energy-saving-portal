// components/MetricCard.tsx
import React from 'react';
import { useRouter } from 'next/router';

interface MetricCardProps {
  title: string;
  metrics: { name: string, input: number, output: number }[];
}

export default function MetricCard({ title, metrics }: MetricCardProps) {
  const router = useRouter();

  const handleRowClick = (metricName: string) => {
    // Navigate to the line chart page with the metric name as query
    router.push(`/metric?name=${metricName}`);
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Category</th>
              <th>Input</th>
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric, index) => (
              <tr key={index} onClick={() => handleRowClick(metric.name)}>
                <td>{metric.name}</td>
                <td>{metric.input}V</td>
                <td>{metric.output}V</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
