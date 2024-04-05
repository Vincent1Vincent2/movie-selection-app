"use client";
import { Movie } from "@/data/types";
import { Search } from "lucide-react";
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
    // Clear the input field
    setSearchQuery("");
  };

  const handleDropdownClick = () => {
    setIsOpen(false);
  };

  const handleSearchIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {isOpen ? (
        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          className="w-full p-2 border rounded bg-zinc-800"
        />
      ) : (
        <div
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={handleSearchIconClick}
        >
          <Search />
        </div>
      )}
      {(searchQuery.length > 0 || isOpen) && (
        <div className="absolute z-10 w-full bg-zinc-900 border rounded shadow-lg overflow-y-scroll h-96">
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
