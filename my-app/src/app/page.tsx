import Link from "next/link";
import { PlusCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-10">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
            YouTube Analytics Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Manage your channels and track performance.
          </p>
        </div>

        <Link
          href={"/forms/Channel"}
          className="mt-4 sm:mt-0 flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-lg hover:bg-red-600 transition-all shadow-md hover:shadow-lg"
        >
          <PlusCircle size={18} />
          Create New Channel
        </Link>
      </header>

      {/* Channel Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Channel 1 */}
        <div className="bg-white hover:bg-gray-50 transition-all cursor-pointer p-6 rounded-2xl shadow-md hover:shadow-lg border border-gray-100 group">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-red-500 transition">
            Channel 1
          </h2>
          <p className="text-sm text-gray-500">
            View detailed analytics and stats.
          </p>
        </div>

        {/* Channel 2 */}
        <div className="bg-white hover:bg-gray-50 transition-all cursor-pointer p-6 rounded-2xl shadow-md hover:shadow-lg border border-gray-100 group">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-red-500 transition">
            Channel 2
          </h2>
          <p className="text-sm text-gray-500">
            View detailed analytics and stats.
          </p>
        </div>

        {/* Channel 3 */}
        <div className="bg-white hover:bg-gray-50 transition-all cursor-pointer p-6 rounded-2xl shadow-md hover:shadow-lg border border-gray-100 group">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-red-500 transition">
            Channel 3
          </h2>
          <p className="text-sm text-gray-500">
            View detailed analytics and ts.
          </p>
        </div>

        {/* Add New Channel */}
        <div className="bg-white flex flex-col items-center justify-center p-6 rounded-2xl shadow-md hover:shadow-lg border border-dashed border-gray-300 hover:border-red-400 transition cursor-pointer">
          <PlusCircle className="text-red-500 mb-2" size={32} />
          <span className="text-gray-600 font-medium">Add Channel</span>
        </div>
      </section>

      
    </main>

  );
}
