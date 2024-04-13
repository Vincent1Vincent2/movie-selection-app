"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PropsWithChildren, useCallback, useEffect } from "react";
import { useMovies } from "../context/movieContext";

export function MovieCarousel(props: PropsWithChildren) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const { startMovies } = useMovies(); // Get the start movies array from my context

  // Map over the array and display it's contents

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{props.children}</div>
      </div>
      <div className="flex justify-between px-10 max-sm:px-2 relative -top-80">
        <ChevronLeft
          className="embla__prev Right h-8 w-12 bg-black bg-opacity-75 rounded-full align-middle"
          onClick={scrollPrev}
        />
        <ChevronRight
          className="embla__prev Left h-8 w-12 bg-black bg-opacity-75 rounded-full align-middle"
          onClick={scrollNext}
        />
      </div>
    </div>
  );
}
