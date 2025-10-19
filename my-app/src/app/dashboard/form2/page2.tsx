"use client";
import { useState, useEffect } from "react";

interface Channel {
  id: string;
  name: string;
  subscribers: number | string;
  totalViews: number | string;
  totalVideos: number | string;
  joinDate: string;
  thumbnail: string;
}

interface Overview {
  views: number | string;
  watchTime: number | string;
  subscribers: number | string;
  revenue: number | string;
  impressions: number | string;
  clickThroughRate: number | string;
}

interface Performance {
  today: Overview;
  last7Days: Overview;
  last28Days: Overview;
}

interface Video {
  id: string;
  title: string;
  views: number | string;
  watchTime: number | string;
  likes: number | string;
  comments: number | string;
  thumbnail: string;
  publishedAt: string;
  revenue: number | string;
}

interface Audience {
  ageGroup: string;
  percentage: number | string;
  gender: string;
}

interface Geography {
  country: string;
  views: number | string;
  subscribers: number | string;
  watchTime: number | string;
}

interface FormDataType {
  channel: Channel;
  overview: Overview;
  performance: Performance;
  videos: Video[];
  audience: Audience[];
  geography: Geography[];
}

export default function ChannelForm() {
  const [formData, setFormData] = useState<FormDataType>({
    channel: {
      id: "",
      name: "",
      subscribers: "",
      totalViews: "",
      totalVideos: "",
      joinDate: "",
      thumbnail: "",
    },
    overview: {
      views: "",
      watchTime: "",
      subscribers: "",
      revenue: "",
      impressions: "",
      clickThroughRate: "",
    },
    performance: {
      today: {
        views: "",
        watchTime: "",
        subscribers: "",
        revenue: "",
        impressions: "",
        clickThroughRate: "",
      },
      last7Days: {
        views: "",
        watchTime: "",
        subscribers: "",
        revenue: "",
        impressions: "",
        clickThroughRate: "",
      },
      last28Days: {
        views: "",
        watchTime: "",
        subscribers: "",
        revenue: "",
        impressions: "",
        clickThroughRate: "",
      },
    },
    videos: [
      {
        id: "",
        title: "",
        views: "",
        watchTime: "",
        likes: "",
        comments: "",
        thumbnail: "",
        publishedAt: "",
        revenue: "",
      },
    ],
    audience: [
      { ageGroup: "", percentage: "", gender: "" },
    ],
    geography: [
      { country: "", views: "", subscribers: "", watchTime: "" },
    ],
  });

  // ✅ Load saved data
  useEffect(() => {
    const saved = localStorage.getItem("channelData");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  // ✅ Save data to localStorage on change
  useEffect(() => {
    localStorage.setItem("channelData", JSON.stringify(formData));
  }, [formData]);

  // ✅ Handle field change safely
  const handleChange = (
    section: keyof FormDataType,
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // ✅ Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Data Saved Successfully!");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-6 sm:px-16">
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-10"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          YouTube Channel Data Form
        </h1>

        {/* CHANNEL SECTION */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Channel Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Channel ID"
              className="border p-2 rounded"
              value={formData.channel.id}
              onChange={(e) => handleChange("channel", "id", e.target.value)}
            />
            <input
              placeholder="Name"
              className="border p-2 rounded"
              value={formData.channel.name}
              onChange={(e) => handleChange("channel", "name", e.target.value)}
            />
            <input
              placeholder="Subscribers"
              className="border p-2 rounded"
              value={formData.channel.subscribers}
              onChange={(e) => handleChange("channel", "subscribers", e.target.value)}
            />
            <input
              placeholder="Total Views"
              className="border p-2 rounded"
              value={formData.channel.totalViews}
              onChange={(e) => handleChange("channel", "totalViews", e.target.value)}
            />
            <input
              placeholder="Total Videos"
              className="border p-2 rounded"
              value={formData.channel.totalVideos}
              onChange={(e) => handleChange("channel", "totalVideos", e.target.value)}
            />
            <input
              type="date"
              className="border p-2 rounded"
              value={formData.channel.joinDate}
              onChange={(e) => handleChange("channel", "joinDate", e.target.value)}
            />
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.keys(formData.overview).map((key) => (
              <input
                key={key}
                placeholder={key}
                className="border p-2 rounded"
                value={(formData.overview as any)[key]}
                onChange={(e) => handleChange("overview", key, e.target.value)}
              />
            ))}
          </div>
        </section>

        {/* PERFORMANCE SECTION */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Performance</h2>
          <p className="font-medium text-gray-600 mb-2">Today</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.keys(formData.performance.today).map((key) => (
              <input
                key={key}
                placeholder={`Today ${key}`}
                className="border p-2 rounded"
                value={(formData.performance.today as any)[key]}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    performance: {
                      ...prev.performance,
                      today: {
                        ...prev.performance.today,
                        [key]: e.target.value,
                      },
                    },
                  }))
                }
              />
            ))}
          </div>
        </section>

        <div className="text-center mt-10">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Save All Data
          </button>
        </div>
      </form>
    </main>
  );
}
