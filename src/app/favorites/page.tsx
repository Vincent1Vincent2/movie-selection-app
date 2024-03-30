"use client";

import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/movieContext";

export default function Bookmarks() {
  const { favorites } = useMovies();

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>You haven't added any movies to your favorites yet.</p>
      ) : (
        <div>
          {favorites.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
