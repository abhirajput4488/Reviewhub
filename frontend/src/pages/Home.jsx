import React, { useState } from "react";
import Navbar from "../components/Navbar";

const dummyBusinesses = [
  { id: 1, name: "Pizza Hub", category: "Restaurant", location: "Delhi" },
  { id: 2, name: "Tech Store", category: "Shop", location: "Noida" },
  { id: 3, name: "Car Wash Pro", category: "Service", location: "Lucknow" },
];

const Home = () => {
  const [search, setSearch] = useState("");

  const filtered = dummyBusinesses.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Discover & Review Local Businesses
          </h2>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search businesses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-8"
          />

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((biz) => (
              <div
                key={biz.id}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {biz.name}
                </h3>
                <p className="text-gray-600 mt-1">
                  {biz.category} • {biz.location}
                </p>

                <button className="mt-4 text-blue-600 font-medium hover:underline">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
