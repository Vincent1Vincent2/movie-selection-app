// __tests__/page.test.tsx
import { MovieCarousel } from "@/app/components/MovieCarousel";
import Page from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
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

jest.mock("../src/app/context/movieContext", () => ({
  __esModule: true,
  MovieContext: {
    Provider: ({ children }: PropsWithChildren) => children,
  },
  useMovies: () => ({
    allMovies: [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
      { id: 3, title: "Movie 3" },
    ],
    startMovies: [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
      { id: 3, title: "Movie 3" },
    ],
    trendingMovies: [
      { id: 4, title: "Trending Movie 1" },
      { id: 5, title: "Trending Movie 2" },
    ],
    recommendedMovies: [
      { id: 6, title: "Recommended Movie 1" },
      { id: 7, title: "Recommended Movie 2" },
    ],
    searchQuery: "",
    setSearchQuery: jest.fn(),
    filteredMovies: [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
      { id: 3, title: "Movie 3" },
    ],
    favorites: [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
    ],
    addToFavorites: jest.fn(),
    removeFromFavorites: jest.fn(),
  }),
}));

describe("Page", () => {
  it("renders the Page component", () => {
    render(
      <MovieCarousel>
        <Page />
      </MovieCarousel>
    );
    expect(screen.getByText("Must See Movies")).toBeInTheDocument();
  });
});
