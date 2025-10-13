// src/components/DashboardStats.jsx
import React from 'react';
import { useAnalyticsStore } from '../store/useAnalyticsStore';

export default function DashboardStats() {
  const { stats } = useAnalyticsStore();

  const cards = [
    { label: 'Total Views', value: stats.views.toLocaleString() },
    { label: 'Subscribers', value: stats.subscribers.toLocaleString() },
    { label: 'Watch Time (hrs)', value: stats.watchTime },
    { label: 'Revenue ($)', value: stats.revenue },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div key={card.label} className="bg-white p-4 rounded-xl shadow text-center">
          <h3 className="text-gray-500 text-sm">{card.label}</h3>
          <p className="text-2xl font-semibold text-gray-800 mt-1">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
