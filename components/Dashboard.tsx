// components/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GaugeChart from './GaugeChart';

interface Voltage {
  L1: number;
  L2: number;
  L3: number;
}

interface Current {
  L1: number;
  L2: number;
  L3: number;
}

interface Power {
  L1: number;
  L2: number;
}

interface Data {
  voltage?: Voltage;
  current?: Current;
  power?: Power;
  rate_of_savings?: number;
}

export default function Dashboard() {
  const [data, setData] = useState<Data>({});

  useEffect(() => {
    axios.get('/api/data').then((response) => setData(response.data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Energy Saving Portal</h1>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Voltage</h5>
              {data.voltage ? (
                <div>
                  <p>L1: {data.voltage.L1}V</p>
                  <p>L2: {data.voltage.L2}V</p>
                  <p>L3: {data.voltage.L3}V</p>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Current</h5>
              {data.current ? (
                <div>
                  <p>L1: {data.current.L1}A</p>
                  <p>L2: {data.current.L2}A</p>
                  <p>L3: {data.current.L3}A</p>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Power</h5>
              {data.power ? (
                <div>
                  <p>L1: {data.power.L1}kW</p>
                  <p>L2: {data.power.L2}kW</p>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Rate of Savings</h5>
              {data.rate_of_savings !== undefined ? (
                <GaugeChart savings={data.rate_of_savings} />
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
