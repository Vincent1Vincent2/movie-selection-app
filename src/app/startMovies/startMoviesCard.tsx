"use client";
import MovieCard from "../components/MovieCard";
import { MovieCarousel } from "../components/MovieCarousel";
import { useMovies } from "../context/movieContext";

export default function StartMoviesCard() {
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
