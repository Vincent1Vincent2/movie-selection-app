"use client";

import Link from "next/link";
import { useMovies } from "../context/movieContext";

export default function startMoviesCard() {
  const { startMovies } = useMovies(); // Get the start movies array from my context

  // Map over the array and display it's contents
  return startMovies.map((movie) => (
    <div key={Math.random()}>
      <Link href={`/movie/${movie.title}`}>
        <p>{movie.title}</p>
      </Link>
      <p>{movie.year}</p>
      <p>{movie.genre}</p>
    </div>
  ));
}
