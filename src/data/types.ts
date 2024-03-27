export type Actors = {
  actors: [];
};

export interface Movie {
  title: string;
  year: number;
  rating: string;
  actors: Actors[];
  genre: string;
  synopsis: string;
  thumbnail: string;
}
