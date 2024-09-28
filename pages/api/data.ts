// pages/api/data.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  voltage: {
    L1: number;
    L2: number;
    L3: number;
  };
  current: {
    L1: number;
    L2: number;
    L3: number;
  };
  power: {
    L1: number;
    L2: number;
  };
  rate_of_savings: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    voltage: { L1: 239.99, L2: 240.52, L3: 240.87 },
    current: { L1: 440.60, L2: 457.20, L3: 427.64 },
    power: { L1: 104.63, L2: 109.05 },
    rate_of_savings: 6.58,
  });
}
