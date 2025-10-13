// src/store/useAnalyticsStore.js
import { create } from 'zustand';

export const useAnalyticsStore = create((set) => ({
  dailyViews: [
    { day: 'Mon', views: 400 },
    { day: 'Tue', views: 800 },
    { day: 'Wed', views: 1000 },
    { day: 'Thu', views: 700 },
    { day: 'Fri', views: 1200 },
    { day: 'Sat', views: 900 },
    { day: 'Sun', views: 1100 },
  ],
  setDailyViews: (newData) => set({ dailyViews: newData }),
}));
