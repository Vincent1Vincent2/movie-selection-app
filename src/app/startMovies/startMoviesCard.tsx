"use client";
import MovieCard from "../components/MovieCard";
import { MovieCarousel } from "../components/MovieCarousel";
import { useMovies } from "../context/movieContext";

export default function startMoviesCard() {
  const { startMovies } = useMovies();
  return (
    <MovieCarousel>
      {startMovies.map((movie) => (
        <div key={movie.title} className="embla__slide">
          <MovieCard movie={movie} />
        </div>
      ))}
    </MovieCarousel>
  );
}
