import { Movie } from "@/data/types";
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
    <button onClick={handleFavoriteClick}>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};

export default BookmarkButton;
