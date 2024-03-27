"use client";

import { useMovies } from "@/app/context/movieContext";
import Link from "next/link";
import { useEffect } from "react";

type PageProps = { params: { title: string } };

export default function MoviePage({ params }: PageProps) {
  const movie = getProductByTitle(params.title);

  useEffect(() => {
    if (movie) {
      console.log(movie);
    } else {
      console.log("Movie not found");
    }
  }, [movie]);

  function getProductByTitle(title: string) {
    const allMovies = [
      ...useMovies().startMovies,
      ...useMovies().trendingMovies,
      ...useMovies().recommendedMovies,
    ];
    return allMovies.find((movie) => movie.title === title);
  }

  if (!movie) {
    return (
      <main className="p-5">
        <Link href={"/"}>Go to homepage</Link>
      </main>
    );
  }

  return (
    <main className="p-5">
      <h2>{movie.title}</h2>
      <p>{movie.year}</p>
      <p>{movie.genre}</p>
    </main>
  );
}
