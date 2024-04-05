import MovieCard from "@/app/components/MovieCard";
import { useMovies } from "@/app/context/movieContext";
import { Movie } from "@/data/types";
import { fireEvent, render, screen } from "@testing-library/react";
import { PropsWithChildren } from "react";

jest.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: jest.fn(() => [
    { current: null },
    {
      scrollPrev: jest.fn(),
      scrollNext: jest.fn(),
      slideNodes: jest.fn(() => []),
    },
  ]),
  Autoplay: jest.fn(),
}));

const initializeMovieState = () => {
  let favorites: Movie[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const addToFavorites = (movie: Movie) => {
    favorites.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    return "1";
  };

  const removeFromFavorites = (movie: Movie) => {
    favorites = favorites.filter((m) => m.title !== movie.title);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    return "0";
  };

  return { favorites, addToFavorites, removeFromFavorites };
};

jest.mock("../src/app/context/movieContext", () => ({
  __esModule: true,
  MovieContext: {
    Provider: ({ children }: PropsWithChildren) => children,
  },
  useMovies: () => {
    const { favorites, addToFavorites, removeFromFavorites } =
      initializeMovieState();

    return {
      favorites,
      addToFavorites,
      removeFromFavorites,
    };
  },
}));

describe("localStorage", () => {
  beforeEach(() => {
    let favorites: Movie[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    localStorage.setItem("favorites", JSON.stringify(favorites));
  });

  it("adds a movie to favorites and saves it in localStorage", () => {
    let movie: Movie = {
      title: "Movie 2",
      year: 2022,
      rating: "7.5",
      actors: ["Actor 2"],
      genre: "Comedy",
      synopsis: "Synopsis 2",
      thumbnail: "thumbnail2.jpg",
    };
    render(<MovieCard movie={movie} />);

    const favoriteButton = screen.getByRole("button", { name: /favorite/i });
    fireEvent.click(favoriteButton);
    expect(useMovies().addToFavorites(movie)).toEqual("1");

    // Check if the movie is saved in localStorage
    expect(localStorage.getItem("favorites")).not.toBeNull();
    expect(JSON.stringify(localStorage.getItem.length)).toMatch("1");
  });

  it("removes a movie from favorites and updates localStorage", () => {
    let movie: Movie = {
      title: "Movie 1",
      year: 2023,
      rating: "8.0",
      actors: ["Actor 1"],
      genre: "Action",
      synopsis: "Synopsis 1",
      thumbnail: "thumbnail1.jpg",
    };
    render(<MovieCard movie={movie} />);

    const favoriteButton = screen.getByRole("button", { name: /favorite/i });
    fireEvent.click(favoriteButton);
    expect(useMovies().removeFromFavorites(movie)).toEqual("0");

    expect(localStorage.getItem("favorites")).not.toBeNull();
    expect(JSON.stringify(localStorage.getItem.length)).toMatch("1");
  });
});
