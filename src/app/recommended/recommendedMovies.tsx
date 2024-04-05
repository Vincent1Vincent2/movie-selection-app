"use client";
import MovieCard from "../components/MovieCard";
import { MovieCarousel } from "../components/MovieCarousel";
import { useMovies } from "../context/movieContext";

export default function RecommendedMoviesCard() {
  const { recommendedMovies } = useMovies(); // Get the recommended movies array from my context

  // Map over the array and display it's contents
  return (
    <MovieCarousel>
      {recommendedMovies.map((movie) => (
        <div key={movie.title} className="embla__slide flex justify-center ">
          <MovieCard movie={movie} />
        </div>
      ))}
    </MovieCarousel>
  );
}
