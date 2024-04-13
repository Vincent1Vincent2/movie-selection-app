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
        <picture>
          <img
            src={movie.thumbnail}
            alt={movie.title}
            width={300}
            height={300}
          />
        </picture>
      </Link>
      <div className="absolute top-2 left-52">
        <FavoriteButton movie={movie} />
      </div>
      <div className="flex items-start pt-5 justify-between">
        <h3 className="text-lg font-bold w-40">{movie.title}</h3>
        <p className="w-16">{movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
