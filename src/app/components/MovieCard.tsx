import { Movie } from "@/data/types";
import Link from "next/link";
import BookmarkButton from "./BookmarkButton";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="relative w-48 h-80 flex flex-col">
      <Link href={`/movie/${movie.title}`}>
        <img
          src={movie.thumbnail}
          alt={movie.title}
          width={200}
          height={300}
          className="rounded"
        />
      </Link>
      <div className="absolute top-1 right-2">
        <BookmarkButton movie={movie} />
      </div>
      <div className="flex-1 flex items-center">
        <h3 className="text-lg font-bold truncate">{movie.title}</h3>
      </div>
      <p>{movie.rating}</p>
    </div>
  );
};

export default MovieCard;
