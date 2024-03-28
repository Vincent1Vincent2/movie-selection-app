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
  allMovies: Movie[];
  startMovies: Movie[];
  trendingMovies: Movie[];
  recommendedMovies: Movie[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredMovies: Movie[];
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movie: Movie) => void;
}

const MovieContext = createContext<ContextValue>({} as ContextValue);

export function MovieProvider(props: PropsWithChildren) {
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [startMovies, setStartMovies] = useState<Movie[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever the favorites state changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movie: Movie) => {
    setFavorites((prev) => prev.filter((m) => m.title !== movie.title));
  };

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
    setAllMovies(moviesData);
    setStartMovies(startMovies);
    setTrendingMovies(trendingMovies);
    setRecommendedMovies(recommendedMovies);
  }, []);

  useEffect(() => {
    console.log("this is start", startMovies);
    console.log("this is trend", trendingMovies);
    console.log("this is Rec", recommendedMovies);
    console.log("this is all", allMovies);
  });

  return (
    <MovieContext.Provider
      value={{
        allMovies,
        startMovies,
        trendingMovies,
        recommendedMovies,
        searchQuery,
        setSearchQuery,
        filteredMovies,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);

export default MovieProvider;
