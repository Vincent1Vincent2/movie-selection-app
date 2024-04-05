"use client";

import { Movie } from "@/data/types";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="relative w-64 h-full flex flex-col">
      <Link href={`/movie/${movie.title}`}>
        <img src={movie.thumbnail} alt={movie.title} width={200} height={300} />
      </Link>
      <div className="absolute top-2 right-2">
        <FavoriteButton movie={movie} />
      </div>
      <div className="flex-1 flex items-center justify-between pt-5">
        <h3 className="text-lg font-bold truncate">{movie.title}</h3>
        <p>{movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
