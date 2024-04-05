"use client";

import MovieCard from "@/app/components/MovieCard";
import { useMovies } from "@/app/context/movieContext";
import Link from "next/link";
import { useEffect } from "react";

type PageProps = { params: { title: string } };

export default function MoviePage({ params }: PageProps) {
  const url = params.title;
  const searchParams = decodeURIComponent(url);
  console.log(searchParams);
  const movie = useMovies().allMovies.find(
    (movie) => movie.title === searchParams
  );

  useEffect(() => {
    if (movie) {
      console.log(movie);
    } else {
      console.log("Movie not found");
      console.log(movie);
    }
  }, [movie]);

  if (!movie) {
    return (
      <main className="p-5">
        <Link href={"/"}>Go to homepage</Link>
      </main>
    );
  }

  return (
    <main className="bg-zinc-800 mx-5 max-sm:p-5 max-sm:rounded-lg">
      <div className="flex max-sm:flex-col max-sm:gap-3 max-sm:p-0 p-24 gap-10">
        <MovieCard movie={movie} />
        <div className="flex flex-col">
          <div className="py-2">
            <span>Plot</span>
            <p className="py-2">{movie.synopsis}</p>
          </div>
          <div className="py-2">
            <span>Actors</span>
            <div className="max-sm:flex max-sm:flex-col py-2">
              {movie.actors.map((actor: string) => (
                <span key={actor}>{actor}</span>
              ))}
            </div>
          </div>
          <div className="py-2">
            <span>Genre</span>
            <p className="py-2">{movie.genre}</p>
          </div>
          <div className="py-2">
            <span>Release Date</span>
            <p className="py-2">{movie.year}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
