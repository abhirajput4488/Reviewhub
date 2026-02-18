import { useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import BusinessCard from "../components/BusinessCard";
import SearchFilter from "../components/SearchFilter";

const dummyBusinesses = [
  { _id: 1, name: "Pizza Hub", category: "Restaurant", location: "Delhi" },
  { _id: 2, name: "Tech Store", category: "Shop", location: "Noida" },
  { _id: 3, name: "Car Wash Pro", category: "Service", location: "Lucknow" },
];

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredBusinesses = dummyBusinesses.filter((b) => {
    return (
      b.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? b.category === category : true)
    );
  });

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {filteredBusinesses.map((business) => (
            <BusinessCard key={business._id} business={business} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
