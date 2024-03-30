"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import RecommendedMoviesCard from "./recommended/recommendedMovies";
import StartMovies from "./startMovies/page";
import TrendingMoviesCard from "./trending/trendingMovies";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="w-full"
      >
        <AccordionItem value="item-1">
          <div className="flex justify-between items-center">
            <h2 className="mx-5 font-bold text-2xl py-5 max-sm:flex max-sm:justify-center">
              Must See Movies
            </h2>
            <AccordionTrigger className="AccordionTrigger mr-32 max-sm:mr-5">
              <ChevronDown className="AccordionArrow" />
            </AccordionTrigger>
          </div>

          <AccordionContent className="AccordionContent">
            <StartMovies />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <div>
            <div className="flex justify-between">
              <h2 className="mx-8 font-bold text-2xl py-5 max-sm:flex max-sm:justify-center">
                Trending Movies
              </h2>
              <AccordionTrigger className="AccordionTrigger mr-32 max-sm:mr-5">
                <ChevronDown className="AccordionArrow" />
              </AccordionTrigger>
            </div>
            <AccordionContent className="AccordionContent">
              <TrendingMoviesCard />
            </AccordionContent>
          </div>
        </AccordionItem>
        <AccordionItem value="item-3">
          <div className="flex justify-between">
            <h2 className="mx-8 font-bold text-2xl py-5 max-sm:flex max-sm:justify-center">
              Your Recommendations
            </h2>
            <AccordionTrigger className="AccordionTrigger mr-32 max-sm:mr-5">
              <ChevronDown className="AccordionArrow" />
            </AccordionTrigger>
          </div>
          <AccordionContent className="AccordionContent">
            <div>
              <RecommendedMoviesCard />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
