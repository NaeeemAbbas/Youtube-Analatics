"use client";
import { useState } from "react";

interface Channel {
  id: string;
  name: string;
  subscribers: string | number;
  totalViews: string | number;
  totalVideos: string | number;
  joinDate: string;
  thumbnail: string;
}

interface Overview {
  views: string | number;
  watchTime: string | number;
  subscribers: string | number;
  revenue: string | number;
  impressions: string | number;
  clickThroughRate: string | number;
}

interface PerformancePeriod {
  views: string | number;
  watchTime: string | number;
  subscribers: string | number;
  revenue: string | number;
  impressions: string | number;
  clickThroughRate: string | number;
}

interface Performance {
  today: PerformancePeriod;
  last7Days: PerformancePeriod;
  last28Days: PerformancePeriod;
}

interface Video {
  id: string;
  title: string;
  views: string | number;
  watchTime: string | number;
  likes: string | number;
  comments: string | number;
  thumbnail: string;
  publishedAt: string;
  revenue: string | number;
}

interface Audience {
  ageGroup: string;
  percentage: string | number;
  gender: string;
}

interface Geography {
  country: string;
  views: string | number;
  subscribers: string | number;
  watchTime: string | number;
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
    audience: [{ ageGroup: "", percentage: "", gender: "" }],
    geography: [{ country: "", views: "", subscribers: "", watchTime: "" }],
  });

  const handleChange = (
    section: keyof FormDataType,
    field: string,
    value: string,
    index?: number,
    subSection?: keyof Performance
  ) => {
    setFormData((prev) => {
      if (section === "channel" || section === "overview") {
        return {
          ...prev,
          [section]: {
            ...prev[section],
            [field]: value,
          },
        };
      } else if (section === "performance" && subSection) {
        return {
          ...prev,
          performance: {
            ...prev.performance,
            [subSection]: {
              ...prev.performance[subSection],
              [field]: value,
            },
          },
        };
      } else if (section === "videos" && index !== undefined) {
        const updatedVideos = [...prev.videos];
        updatedVideos[index] = { ...updatedVideos[index], [field]: value };
        return { ...prev, videos: updatedVideos };
      } else if (section === "audience" && index !== undefined) {
        const updatedAudience = [...prev.audience];
        updatedAudience[index] = { ...updatedAudience[index], [field]: value };
        return { ...prev, audience: updatedAudience };
      } else if (section === "geography" && index !== undefined) {
        const updatedGeography = [...prev.geography];
        updatedGeography[index] = { ...updatedGeography[index], [field]: value };
        return { ...prev, geography: updatedGeography };
      }
      return prev;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("form data:", formData);
  };

  const InputField = ({
    label,
    value,
    onChange,
    type = "text",
  }: {
    label: string;
    value: string | number;
    onChange: (v: string) => void;
    type?: string;
  }) => (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1 capitalize">
        {label}
      </label>
      <input
        type={type}
        value={value || ""} // Fallback to empty string if value is undefined/null
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
      />
    </div>
  );

  const SectionTitle = ({ title }: { title: string }) => (
    <h2 className="text-xl font-semibold text-blue-700 border-b pb-2 mb-4 mt-10">
      {title}
    </h2>
  );

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 sm:px-16">
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-10 space-y-8"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          YouTube Channel Analytics Data Form
        </h1>

        {/* Channel Info */}
        <section>
          <SectionTitle title="Channel Info" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(formData.channel).map((key) => (
              <InputField
                key={`channel-${key}`}
                label={key}
                value={formData.channel[key as keyof Channel]}
                onChange={(val) => handleChange("channel", key, val)}
                type={["subscribers", "totalViews", "totalVideos"].includes(key) ? "number" : "text"}
              />
            ))}
          </div>
        </section>

        {/* Overview */}
        <section>
          <SectionTitle title="Overview" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Object.keys(formData.overview).map((key) => (
              <InputField
                key={`overview-${key}`}
                label={key}
                value={formData.overview[key as keyof Overview]}
                onChange={(val) => handleChange("overview", key, val)}
                type={["views", "watchTime", "subscribers", "revenue", "impressions", "clickThroughRate"].includes(key) ? "number" : "text"}
              />
            ))}
          </div>
        </section>

        {/* Performance */}
        <section>
          <SectionTitle title="Performance Metrics" />
          {Object.entries(formData.performance).map(([period, stats]) => (
            <div key={`performance-${period}`} className="mb-6 bg-gray-50 p-4 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-3 capitalize">
                {period.replace(/([A-Z])/g, " $1")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {Object.keys(stats).map((key) => (
                  <InputField
                    key={`performance-${period}-${key}`}
                    label={key}
                    value={(stats as PerformancePeriod)[key as keyof PerformancePeriod]}
                    onChange={(val) =>
                      handleChange("performance", key, val, undefined, period as keyof Performance)
                    }
                    type={["views", "watchTime", "subscribers", "revenue", "impressions", "clickThroughRate"].includes(key) ? "number" : "text"}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Videos */}
        <section>
          <SectionTitle title="Videos" />
          {formData.videos.map((video, i) => (
            <div key={`video-${i}`} className="border rounded-xl p-4 mb-4">
              <h3 className="font-semibold text-gray-700 mb-3">Video {i + 1}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.keys(video).map((key) => (
                  <InputField
                    key={`video-${i}-${key}`}
                    label={key}
                    value={video[key as keyof Video]}
                    onChange={(val) => handleChange("videos", key, val, i)}
                    type={["views", "watchTime", "likes", "comments", "revenue"].includes(key) ? "number" : "text"}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Audience */}
        <section>
          <SectionTitle title="Audience" />
          {formData.audience.map((aud, i) => (
            <div key={`audience-${i}`} className="grid grid-cols-3 gap-6 mb-4">
              {Object.keys(aud).map((key) => (
                <InputField
                  key={`audience-${i}-${key}`}
                  label={key}
                  value={aud[key as keyof Audience]}
                  onChange={(val) => handleChange("audience", key, val, i)}
                  type={["percentage"].includes(key) ? "number" : "text"}
                />
              ))}
            </div>
          ))}
        </section>

        {/* Geography */}
        <section>
          <SectionTitle title="Geography" />
          {formData.geography.map((geo, i) => (
            <div key={`geo-${i}`} className="grid grid-cols-4 gap-6 mb-4">
              {Object.keys(geo).map((key) => (
                <InputField
                  key={`geo-${i}-${key}`}
                  label={key}
                  value={geo[key as keyof Geography]}
                  onChange={(val) => handleChange("geography", key, val, i)}
                  type={["views", "subscribers", "watchTime"].includes(key) ? "number" : "text"}
                />
              ))}
            </div>
          ))}
        </section>

        {/* Submit */}
        <div className="text-center pt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            💾 Save All Data
          </button>
        </div>
      </form>
    </main>
  );
}