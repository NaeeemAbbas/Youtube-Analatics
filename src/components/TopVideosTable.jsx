// src/components/TopVideosTable.jsx
import React from 'react';
import { useAnalyticsStore } from '../store/useAnalyticsStore';

export default function TopVideosTable() {
  const { topVideos } = useAnalyticsStore();

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-gray-700 mb-3 font-medium">Top Performing Videos</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="pb-2">Title</th>
            <th className="pb-2">Views</th>
            <th className="pb-2">Likes</th>
          </tr>
        </thead>
        <tbody>
          {topVideos.map((video, index) => (
            <tr key={index} className="border-b last:border-none">
              <td className="py-2">{video.title}</td>
              <td className="py-2">{video.views}</td>
              <td className="py-2">{video.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
