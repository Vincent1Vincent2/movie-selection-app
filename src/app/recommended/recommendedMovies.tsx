"use client";

import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/movieContext";

export default function RecommendedMoviesCard() {
  const { recommendedMovies } = useMovies(); // Get the recommended movies array from my context

  // Map over the array and display it's contents
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-5 mx-5 max-sm:justify-center max-sm:items-center">
        {recommendedMovies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
}
