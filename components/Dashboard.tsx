// components/Dashboard.tsx
import React from 'react';
import Sidebar from './Sidebar';
import MetricCard from './MetricCard';
import GaugeChart from './GaugeChart';

export default function Dashboard() {
  const voltageMetrics = [
    { name: 'L1', input: 239.99, output: 215.04 },
    { name: 'L2', input: 240.52, output: 215.48 },
    { name: 'L3', input: 240.87, output: 215.85 },
  ];

  const currentMetrics = [
    { name: 'L1', input: 440.60, output: 499.36 },
    { name: 'L2', input: 457.20, output: 520.02 },
    { name: 'L3', input: 427.64, output: 479.27 },
  ];

  const powerMetrics = [
    { name: 'L1', input: 104.63, output: 105.83 },
    { name: 'L2', input: 109.05, output: 110.95 },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-6">
              <MetricCard title="Voltage" metrics={voltageMetrics} />
            </div>
            <div className="col-md-6">
              <MetricCard title="Current" metrics={currentMetrics} />
            </div>
            <div className="col-md-6">
              <MetricCard title="Power" metrics={powerMetrics} />
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Rate of Savings</h5>
                  <GaugeChart savings={6.58} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
