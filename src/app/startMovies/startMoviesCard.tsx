"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/movieContext";

export default function startMoviesCard() {
  const { startMovies } = useMovies(); // Get the start movies array from my context

  // Map over the array and display it's contents
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {startMovies.map((movie) => (
          <CarouselItem
            key={movie.title}
            className="md:basis-1/2 lg:basis-1/3 flex justify-center"
          >
            <div className="p-5">
              <Card>
                <CardContent className="p-5">
                  <MovieCard movie={movie} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-5">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
