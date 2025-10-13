// src/pages/Dashboard.jsx
import React from 'react';
import { useAnalyticsStore } from '../store/useAnalyticsStore';
import ChartCard from '../components/ChartCard';

export default function Dashboard() {
  const { dailyViews, setDailyViews } = useAnalyticsStore();

  // Simulate data change
  const updateData = () => {
    const randomData = dailyViews.map((item) => ({
      ...item,
      views: Math.floor(Math.random() * 1500) + 300, // randomize views
    }));
    setDailyViews(randomData);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">YouTube Analytics Overview</h1>
        <button
          onClick={updateData}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Change Data
        </button>
      </div>

      <ChartCard title="Views Over the Week" data={dailyViews} />
    </div>
  );
}
