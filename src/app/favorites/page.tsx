"use client";

import MovieCard from "../components/MovieCard";
import { MovieCarousel } from "../components/MovieCarousel";
import { useMovies } from "../context/movieContext";

export default function Bookmarks() {
  const { favorites } = useMovies();

  return (
    <div className="flex flex-col mx-8">
      <h1 className=" font-bold text-2xl py-5 max-sm:flex max-sm:justify-center">
        Your Favorites
      </h1>
      {favorites.length === 0 ? (
        <p>You haven&apos;t added any movies to your favorites yet.</p>
      ) : (
        <MovieCarousel>
          {favorites.map((movie) => (
            <div key={movie.title} className="embla__slide">
              <MovieCard movie={movie} />
            </div>
          ))}
        </MovieCarousel>
      )}
    </div>
  );
}
