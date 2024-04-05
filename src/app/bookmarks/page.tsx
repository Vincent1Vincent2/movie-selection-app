import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/movieContext";

export default function Bookmarks() {
  const { favorites } = useMovies();

  return (
    <div className="flex flex-col">
      <h1 className="mx-8 font-bold text-2xl py-5 max-sm:flex max-sm:justify-center">
        Your Favorites
      </h1>
      {favorites.length === 0 ? (
        <p>You haven&apos;t added any movies to your favorites yet.</p>
      ) : (
        <div className="flex flex-wrap gap-10 mx-5 max-sm:justify-center max-sm:items-center">
          {favorites.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
