// src/pages/Dashboard.jsx
import React from 'react';
import DashboardStats from '../components/DashboardStats';
import ChartCard from '../components/ChartCard';
import TopVideosTable from '../components/TopVideosTable';
import { useAnalyticsStore } from '../store/useAnalyticsStore';

export default function Dashboard() {
  const { dailyViews } = useAnalyticsStore();

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800">YouTube Analytics Overview</h1>
      <DashboardStats />
      <ChartCard title="Views Over the Week" data={dailyViews} />
      <TopVideosTable />
    </div>
  );
}
