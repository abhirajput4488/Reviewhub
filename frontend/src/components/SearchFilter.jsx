import React from "react";
const SearchFilter = ({ search, setSearch, category, setCategory }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search businesses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded w-full md:w-60"
      >
        <option value="">All Categories</option>
        <option value="Restaurant">Restaurant</option>
        <option value="Shop">Shop</option>
        <option value="Service">Service</option>
      </select>
    </div>
  );
};

export default SearchFilter;
