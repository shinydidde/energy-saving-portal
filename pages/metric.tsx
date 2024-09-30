// pages/metric.tsx
import React from 'react';
import { useRouter } from 'next/router';
import LineChart from '../components/LineChart';

export default function MetricPage() {
  const router = useRouter();
  const { name } = router.query;

  const handleDownloadCSV = () => {
    const csvContent = 'data:text/csv;charset=utf-8,' + encodeURI('L1 In,L2 In,L3 In\n100,110,120\n');
    const link = document.createElement('a');
    link.setAttribute('href', csvContent);
    link.setAttribute('download', 'voltage_data.csv');
    link.click();
  };


  return (
    <div className="container">
      <h1>{name} Voltage</h1>
      <div className="d-flex justify-content-between mb-3">
        <input type="date" className="form-control w-25" />
        <button className="btn btn-success" onClick={handleDownloadCSV}>
          Download as CSV
        </button>
      </div>
      <LineChart />
    </div>
  );
}
