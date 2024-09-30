// components/Sidebar.tsx
import React from 'react';

export default function Sidebar() {
  return (
    <div className="d-flex flex-column bg-light p-3 h-100">
      <div className="mb-4">
        <h5>Device ID</h5>
        <p className="text-warning">MP-ELSA Elanders</p>
      </div>
      <div className="mb-4">
        <h5>Status</h5>
        <p className="text-success">Online</p>
        <p>16.09.2024 09:43</p>
      </div>
      <div className="mb-4">
        <h5>Mode</h5>
        <p className="text-info">Regular</p>
      </div>
      <div className="mb-4">
        <h5>Output Voltage</h5>
        <p className="text-warning">210V</p>
        <a href="#" className="text-info">Change</a>
      </div>
    </div>
  );
}
