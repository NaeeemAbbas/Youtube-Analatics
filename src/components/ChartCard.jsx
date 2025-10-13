// src/components/ChartCard.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart elements
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function ChartCard({ title, data }) {
  const chartData = {
    labels: data.map((item) => item.day),
    datasets: [
      {
        label: 'Views',
        data: data.map((item) => item.views),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#f3f4f6' } },
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-gray-700 mb-3 font-medium">{title}</h3>
      <Line data={chartData} options={options} height={100} />
    </div>
  );
}
