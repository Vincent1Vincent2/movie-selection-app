import { Movie } from "@/data/types";
import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";
import { useMovies } from "../context/movieContext";

interface BookmarkButtonProps {
  movie: Movie;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ movie }) => {
  // Get the necessary functions and state from the MovieContext
  const { favorites, addToFavorites, removeFromFavorites } = useMovies();
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the movie is in the favorites array
  useEffect(() => {
    setIsFavorite(favorites.some((m: Movie) => m.title === movie.title));
  }, [favorites, movie.title]);

  // Handle the bookmark button click
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(movie);
    } else {
      addToFavorites(movie);
    }
  };

  // Render the bookmark button
  return (
    <button
      onClick={handleFavoriteClick}
      className={`p-2 rounded-full hover:bg-gray-200 transition-colors ${
        isFavorite
          ? "text-yellow-300  bg-slate-200 bg-opacity-50"
          : "text-gray-950-900 bg-slate-200 bg-opacity-50"
      }`}
    >
      <Bookmark
        className={`w-6 h-6 ${isFavorite ? "fill-current" : "stroke-current"}`}
      />
    </button>
  );
};

export default BookmarkButton;
