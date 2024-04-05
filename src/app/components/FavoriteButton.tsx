import { Movie } from "@/data/types";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";
import { useMovies } from "../context/movieContext";

interface FavoriteButtonProps {
  movie: Movie;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movie }) => {
  // Get the necessary functions and state from the MovieContext
  const { favorites, addToFavorites, removeFromFavorites } = useMovies();
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the movie is in the favorites array

  // Handle the bookmark button click
  const handleFavoriteClick = () => {
    const isMovieInFavorites = favorites.some((m) => m.title === movie.title);
    setIsFavorite(isMovieInFavorites);
    if (isMovieInFavorites) {
      removeFromFavorites(movie);
    } else {
      addToFavorites(movie);
    }
  };

  // Render the bookmark button
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      role="button"
      aria-label="Favorite"
      onClick={handleFavoriteClick}
      className={`p-2 rounded-full hover:bg-gray-200 transition-colors ${
        isFavorite
          ? "text-yellow-300  bg-slate-200 bg-opacity-50"
          : "text-gray-950-900 bg-zinc-900 bg-opacity-50"
      }`}
    >
      <Star
        className={`w-6 h-6 ${isFavorite ? "fill-current" : "stroke-current"}`}
      />
    </motion.button>
  );
};

export default FavoriteButton;
