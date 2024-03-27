"use client";

import { useMovies } from "../context/movieContext";

export default function RecommendedMoviesCard() {
  const { recommendedMovies } = useMovies(); // Get the recommended movies array from my context

  // Map over the array and display it's contents
  return recommendedMovies.map((movie) => (
    <div key={Math.random()}>
      <p>{movie.title}</p>
      <p>{movie.year}</p>
      <p>{movie.genre}</p>
    </div>
  ));
}
