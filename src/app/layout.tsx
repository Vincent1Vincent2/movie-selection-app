import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import SearchBar from "./components/SearchBar";
import MovieProvider from "./context/movieContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MovieProvider>
          <header>
            <nav>
              <ul className="flex gap-5 justify-between m-5">
                <SearchBar />
                <div className="flex gap-5">
                  <Link href={"/recommended"}>
                    <li>For You</li>
                  </Link>
                  <Link href={"/bookmarks"}>
                    <li>Bookmarks</li>
                  </Link>
                </div>
              </ul>
            </nav>
          </header>
          {children}
          <footer>
            <ul className="flex gap-5 justify-between m-5">
              <Link href={"/"}>
                <li>Logo</li>
              </Link>
              <div className="flex gap-5">
                <Link href={"/recommended"}>
                  <li>For You</li>
                </Link>
                <Link href={"/bookmarks"}>
                  <li>Bookmarks</li>
                </Link>
              </div>
            </ul>
          </footer>
        </MovieProvider>
      </body>
    </html>
  );
}
