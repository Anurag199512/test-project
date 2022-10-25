export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[] | Character[];
  // characterInfo?: Character[]; // custom key to hold character api data
  url: string;
  created: Date;
}

export type ApiResponse<T> = {
  data: {
    info: {
      count: number,
      pages: number,
      next: string | null,
      prev: null | string
    },
    results: T[]
  }
};

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created:Date;
}

export interface Location {
  name: string;
  url: string;
}