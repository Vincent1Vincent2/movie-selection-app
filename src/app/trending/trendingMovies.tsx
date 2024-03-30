"use client";

import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/movieContext";

export default function TrendingMoviesCard() {
  const { trendingMovies } = useMovies(); //Get the trending movies array from my context

  // Map over the array and display it's contents
  return (
    <div className="flex flex-wrap gap-5 mx-5">
      {trendingMovies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}
