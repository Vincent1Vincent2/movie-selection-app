"use client";

import { useMovies } from "../context/movieContext";

export default function Bookmarks() {
  const { favorites } = useMovies();

  return (
    <div>
      <h1>Bookmarks</h1>
      {favorites.length === 0 ? (
        <p>You haven't added any movies to your favorites yet.</p>
      ) : (
        <div>
          {favorites.map((movie) => (
            <div key={movie.title}>
              <img src={movie.thumbnail} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
