import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface MarketIndex {
  name: string;
  value: string;
  change: string;
  changePercent: string;
  color: string;
  data: number[];
}

export default function MarketOverview() {
  // Mock data for the market indices
  const indices: MarketIndex[] = [
    { 
      name: 'S&P 500', 
      value: '5,218.24', 
      change: '+32.45', 
      changePercent: '+0.62%', 
      color: '#34D399',
      data: [4650, 4700, 4720, 4750, 4800, 4830, 4860, 4900, 4950, 5000, 5100, 5218]
    },
    { 
      name: 'Nasdaq', 
      value: '16,429.50', 
      change: '+85.75', 
      changePercent: '+0.52%', 
      color: '#34D399',
      data: [15200, 15300, 15400, 15600, 15700, 15800, 15900, 16000, 16100, 16200, 16300, 16429]
    },
    { 
      name: 'Dow Jones', 
      value: '40,605.12', 
      change: '-54.34', 
      changePercent: '-0.13%', 
      color: '#F87171',
      data: [40800, 40750, 40700, 40800, 40900, 40850, 40800, 40750, 40700, 40650, 40600, 40605]
    },
    { 
      name: 'S&P Global', 
      value: '3,284.91', 
      change: '+18.23', 
      changePercent: '+0.56%', 
      color: '#34D399',
      data: [3100, 3120, 3140, 3160, 3180, 3200, 3220, 3240, 3260, 3270, 3280, 3285]
    }
  ];

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Market Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {indices.map((index) => (
            <div key={index.name} className="p-3 border rounded-lg bg-gray-50">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">{index.name}</span>
                <span className={`text-xs px-2 py-1 rounded ${index.changePercent.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {index.changePercent}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-xl font-bold text-gray-900">{index.value}</span>
                <span className={`ml-2 text-sm ${index.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {index.change}
                </span>
              </div>
              <div className="h-16 mt-2">
                <Line 
                  data={{
                    labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
                    datasets: [
                      {
                        data: index.data,
                        borderColor: index.color,
                        backgroundColor: `${index.color}33`,
                        fill: true,
                      },
                    ],
                  }}
                  options={options}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 