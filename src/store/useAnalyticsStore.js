// src/store/useAnalyticsStore.js
import { create } from 'zustand';

export const useAnalyticsStore = create((set) => ({
  stats: {
    views: 12000,
    subscribers: 2500,
    watchTime: 530,
    revenue: 320,
  },
  topVideos: [
    { title: 'Quran Recitation', views: 400, likes: 420 },
    { title: 'Islamic Lecture', views: 200, likes: 290 },
    { title: 'Dua Compilation', views: 400, likes: 180 },
  ],
  dailyViews: [
    { day: 'Mon', views: 400 },
    { day: 'Tue', views: 800 },
    { day: 'Wed', views: 1000 },
    { day: 'Thu', views: 700 },
    { day: 'Fri', views: 1200 },
    { day: 'Sat', views: 900 },
    { day: 'Sun', views: 1100 },
  ],
}));
