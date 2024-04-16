import Albums from './models/Albums';

export interface Artist {
  name: string;
  image: string | null;
  info: string;
};

export interface AlbumsMutation {
  name: string;
  singer: string;
  date: string;
  image: string | null
};

export interface TracksMutation {
  name: string;
  duration: string;
  album: string
};

