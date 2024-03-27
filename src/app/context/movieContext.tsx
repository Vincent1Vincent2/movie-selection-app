"use client";

import { Movie } from "@/data/types";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import moviesData from "../../data/movies.json"; // Import data and set it as moviesData

interface ContextValue {
  //Create a context interface that takes all variables and functions needed
  startMovies: Movie[];
  trendingMovies: Movie[];
  recommendedMovies: Movie[];
}

const MovieContext = createContext<ContextValue>({} as ContextValue);

export function MovieProvider(props: PropsWithChildren) {
  const [startMovies, setStartMovies] = useState<Movie[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);

  // Function to shuffle an array
  function randomizeMovies(movie: Movie[]) {
    for (let i = movie.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [movie[i], movie[j]] = [movie[j], movie[i]];
    }
    return movie;
  }

  useEffect(() => {
    // Filter out trending movies
    const trendingMovies = moviesData.filter((movie) => movie.isTrending);

    // Filter out non-trending movies
    const nonTrendingMovies = moviesData.filter((movie) => !movie.isTrending);

    // Shuffle non-trending movies to randomize the selection
    const shuffledNonTrendingMovies = randomizeMovies(nonTrendingMovies);

    // Select 5 movies for recommended
    const recommendedMovies = shuffledNonTrendingMovies.slice(0, 5);

    // Remaining movies for the start section
    const startMovies = shuffledNonTrendingMovies.slice(5);

    // Set the state accordingly
    setStartMovies(startMovies);
    setTrendingMovies(trendingMovies);
    setRecommendedMovies(recommendedMovies);
  }, []);

  useEffect(() => {
    console.log("this is start", startMovies);
    console.log("this is trend", trendingMovies);
    console.log("this is Rec", recommendedMovies);
  });

  return (
    <MovieContext.Provider
      value={{
        startMovies,
        trendingMovies,
        recommendedMovies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);

export default MovieProvider;
