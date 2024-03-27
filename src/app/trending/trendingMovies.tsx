"use client";

import { useMovies } from "../context/movieContext";

export default function TrendingMoviesCard() {
  const { trendingMovies } = useMovies(); //Get the trending movies array from my context

  // Map over the array and display it's contents
  return trendingMovies.map((movie) => (
    <div key={Math.random()}>
      <p>{movie.title}</p>
      <p>{movie.year}</p>
      <p>{movie.genre}</p>
    </div>
  ));
}
