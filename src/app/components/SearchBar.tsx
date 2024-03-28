"use client";

import { Movie } from "@/data/types";
import Link from "next/link";
import { useState } from "react";
import { useMovies } from "../context/movieContext";

export default function SearchBar() {
  const { searchQuery, setSearchQuery, filteredMovies } = useMovies();
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsOpen(true);
  };

  const handleOptionClick = (movie: Movie) => {
    setSearchQuery(movie.title);
    setIsOpen(false);
  };

  const handleDropdownClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className="w-full p-2 border rounded"
      />
      {(searchQuery.length > 0 || isOpen) && (
        <div className="absolute z-10 w-full bg-white border rounded shadow-lg">
          {filteredMovies.map((movie) => (
            <Link
              href={`/movie/${encodeURIComponent(movie.title)}`}
              key={movie.title}
              onClick={handleDropdownClick}
            >
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(movie)}
              >
                {movie.title}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
