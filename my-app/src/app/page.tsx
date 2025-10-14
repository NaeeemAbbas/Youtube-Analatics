import Link from "next/link";

export default function Home() {
  const data = {
    channelName: "My YouTube Channel",
    views: "45.3K",
    subscribers: "3.2K",
    watchTime: "1.8K hrs",
    videos: 54,
    likes: "12.4K",
    comments: "3.9K",
  };
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      {/* Header */}
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          {data.channelName} Dashboard
        </h1>
        <Link href={"/dashboard"} className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">
          + Create New Channel
        </Link>
      
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Total Views</h2>
          <p className="text-3xl font-semibold mt-2">{data.views}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Subscribers</h2>
          <p className="text-3xl font-semibold mt-2">{data.subscribers}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Watch Time</h2>
          <p className="text-3xl font-semibold mt-2">{data.watchTime}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Videos Uploaded</h2>
          <p className="text-3xl font-semibold mt-2">{data.videos}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Likes</h2>
          <p className="text-3xl font-semibold mt-2">{data.likes}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Comments</h2>
          <p className="text-3xl font-semibold mt-2">{data.comments}</p>
        </div>
      </section>
    </main>
  );
}
