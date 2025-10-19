"use client"

import React, { useState } from "react";

interface ChannelInfo {
  id: string;
  name: string;
  subscribers: number;
  totalViews: number;
  totalVideos: number;
  joinDate: string;
  thumbnail: string;
}

interface OverviewInfo {
  views: number;
  watchTime: number;
  subscribers: number;
  revenue: number;
  impressions: number;
  clickThroughRate: number;
}

interface FormData {
  channel: ChannelInfo;
  overview: OverviewInfo;
}

export default function ChannelOverviewForm() {
  const [formData, setFormData] = useState<FormData>({
    channel: {
      id: "tech-reviews-123",
      name: "Tech Reviews Pro",
      subscribers: 1250000,
      totalViews: 45000000,
      totalVideos: 342,
      joinDate: "2018-03-15",
      thumbnail: "/images/tech-channel.jpg",
    },
    overview: {
      views: 2450000,
      watchTime: 12500000,
      subscribers: 12500,
      revenue: 12500,
      impressions: 3450000,
      clickThroughRate: 8.2,
    },
  });

  const handleChange = (
    section: keyof FormData,
    key: string,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("✅ Data saved successfully!");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-5 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          📊 YouTube Channel Data Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Channel Info Section */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-6 border-b pb-2">
              Channel Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Channel ID
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md mt-1"
                  value={formData.channel.id}
                  onChange={(e) =>
                    handleChange("channel", "id", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Channel Name
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md mt-1"
                  value={formData.channel.name}
                  onChange={(e) =>
                    handleChange("channel", "name", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subscribers
                </label>
                <input
                  type="number"
                  className="w-full border p-2 rounded-md mt-1"
                  value={formData.channel.subscribers}
                  onChange={(e) =>
                    handleChange("channel", "subscribers", Number(e.target.value))
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Total Views
                </label>
                <input
                  type="number"
                  className="w-full border p-2 rounded-md mt-1"
                  value={formData.channel.totalViews}
                  onChange={(e) =>
                    handleChange("channel", "totalViews", Number(e.target.value))
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Total Videos
                </label>
                <input
                  type="number"
                  className="w-full border p-2 rounded-md mt-1"
                  value={formData.channel.totalVideos}
                  onChange={(e) =>
                    handleChange("channel", "totalVideos", Number(e.target.value))
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Join Date
                </label>
                <input
                  type="date"
                  className="w-full border p-2 rounded-md mt-1"
                  value={formData.channel.joinDate}
                  onChange={(e) =>
                    handleChange("channel", "joinDate", e.target.value)
                  }
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Thumbnail URL
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md mt-1"
                  value={formData.channel.thumbnail}
                  onChange={(e) =>
                    handleChange("channel", "thumbnail", e.target.value)
                  }
                />
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-6 border-b pb-2">
              Channel Overview
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Views
                </label>
                <input
                  type="number"
                  className="w-full border p-2 rounded-md mt-1"
                  value={formData.overview.views}
                  onChange={(e) =>
                    handleChange("overview", "views", Number(e.target.value))
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Watch Time
                </label>
                <input
                  type="number"
                  className="w-full border p-2 rounded-md mt-1"
                  value={formData.overview.watchTime}
                  onChange={(e) =>
                    handleChange("overview", "watchTime", Number(e.target.value))
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subscribers Gained
                </label>
                <input
                  type="number"
                  className="w-full border p-2 rounded-md mt-1"
                  value={formData.overview.subscribers}
                  onChange={(e) =>
                    handleChange("overview", "subscribers", Number(e.target.value))
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Revenue ($)
                </label>
                <input
                  type="number"
                  className="w-full border p-2 rounded-md mt-1"
                  value={formData.overview.revenue}
                  onChange={(e) =>
                    handleChange("overview", "revenue", Number(e.target.value))
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Impressions
                </label>
                <input
                  type="number"
                  className="w-full border p-2 rounded-md mt-1"
                  value={formData.overview.impressions}
                  onChange={(e) =>
                    handleChange("overview", "impressions", Number(e.target.value))
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Click-Through Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full border p-2 rounded-md mt-1"
                  value={formData.overview.clickThroughRate}
                  onChange={(e) =>
                    handleChange(
                      "overview",
                      "clickThroughRate",
                      Number(e.target.value)
                    )
                  }
                />
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 rounded-lg font-semibold shadow-md"
            >
              💾 Save Data
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
