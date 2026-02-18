import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";
import BusinessCard from "../components/BusinessCard";
import SearchFilter from "../components/SearchFilter";
import API from "../api/axios";

const Home = () => {
  const [businesses, setBusinesses] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const { data } = await API.get("/businesses");
        setBusinesses(data);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      }
    };
    fetchBusinesses();
  }, []);

  const filteredBusinesses = businesses.filter((b) => {
    return (
      b.name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? b.category === category : true)
    );
  });

  const categories = [...new Set(businesses.map((b) => b.category))];

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          categories={categories}
        />

        {filteredBusinesses.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No businesses found.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {filteredBusinesses.map((business) => (
              <BusinessCard key={business._id} business={business} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
