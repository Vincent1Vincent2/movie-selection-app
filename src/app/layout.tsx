import { Home, Star } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import SearchBar from "./components/SearchBar";
import MovieProvider from "./context/movieContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Selection App",
  description:
    "This is a website witch showcase movies, some of the best ever made.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        role="document"
        className={(inter.className, "bg-zinc-900 text-amber-50")}
      >
        <MovieProvider>
          <header aria-level={1} id="header" role="heading">
            <nav role="navigation">
              <ul
                role="list"
                className="flex gap-5 justify-between m-5 items-center"
              >
                <div className="flex items-center gap-3">
                  <Link role="link" href={"/"}>
                    <Home />
                  </Link>
                  <Link role="link" href={"/favorites"}>
                    <Star className="stroke-yellow-300" />
                  </Link>
                </div>
                <div className="flex gap-3 items-center">
                  <Link role="link" href={"/recommended"}>
                    <li role="listitem">For You</li>
                  </Link>
                  <SearchBar />
                </div>
              </ul>
            </nav>
          </header>
          {children}
          <footer role="contentinfo">
            <ul
              role="list"
              className="flex gap-5 justify-center m-5 items-center"
            >
              <div className="flex items-center gap-3">
                <Link role="link" href={"/"}>
                  <Home />
                </Link>
                <Link role="link" href={"/bookmarks"}>
                  <Star className="stroke-yellow-300" />
                </Link>
              </div>
            </ul>
          </footer>
        </MovieProvider>
      </body>
    </html>
  );
}
