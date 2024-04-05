import RecommendedMoviesCard from "./recommendedMovies";

export default function RecommendedMovies() {
  return (
    <main>
      <h1 className="mx-8 font-bold text-2xl py-5 max-sm:flex max-sm:justify-center">
        Your Recommendations
      </h1>
      <RecommendedMoviesCard />
    </main>
  );
}
