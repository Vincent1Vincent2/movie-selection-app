"use client";
import { AnimatePresence, motion } from "framer-motion";
import MovieCard from "../components/MovieCard";
import { MovieCarousel } from "../components/MovieCarousel";
import { useMovies } from "../context/movieContext";

export default function StartMoviesCard() {
  const { startMovies } = useMovies();

  return (
    <main>
      <MovieCarousel>
        <AnimatePresence>
          {startMovies.map((movie) => (
            <motion.div
              key={movie.title}
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{
                type: "spring",
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="embla__slide flex justify-center "
            >
              <MovieCard movie={movie} />
            </motion.div>
          ))}
        </AnimatePresence>
      </MovieCarousel>
    </main>
  );
}
