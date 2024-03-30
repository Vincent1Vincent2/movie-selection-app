import RecommendedMovies from "./recommended/page";
import StartMovies from "./startMovies/page";
import TrendingMoviesCard from "./trending/trendingMovies";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <div>
        <h2 className="mx-8 font-bold text-2xl py-5">Must See Movies</h2>
        <StartMovies />
      </div>
      <div>
        <h2 className="mx-8 font-bold text-2xl py-5">Trending Movies</h2>
        <TrendingMoviesCard />
      </div>
      <div>
        <h2 className="mx-8 font-bold text-2xl py-5">Recommended Movies</h2>
        <RecommendedMovies />
      </div>
    </main>
  );
}
