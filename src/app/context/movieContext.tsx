"use client";

import { Movie } from "@/data/types";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import moviesData from "../../data/movies.json"; // Import data and set it as moviesData

interface ContextValue {
  //Create a context interface that takes all variables and functions needed
  movies: Movie[];
}

const MovieContext = createContext<ContextValue>({} as ContextValue);

export function MovieProvider(props: PropsWithChildren) {
  const [movies, setMovies] = useState<Movie[]>([]);
  console.log(moviesData);

  useEffect(() => {
    // Set the movies only once when the component mounts
    setMovies(moviesData);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <MovieContext.Provider
      value={{
        movies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;
