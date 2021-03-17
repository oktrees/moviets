
export interface Search {
  page:          number;
  results:       SearchMovies[] | Searchtelevisions[];
  total_results: number;
  total_pages:   number;
}

interface SearchMovies {
  poster_path:       null | string;
  adult:             boolean;
  overview:          string;
  release_date:      Date;
  genre_ids:         number[];
  id:                number;
  original_title:    string;
  original_language: OriginalLanguage;
  title:             string;
  backdrop_path:     null | string;
  popularity:        number;
  vote_count:        number;
  video:             boolean;
  vote_average:      number;
}

interface Searchtelevisions {
  poster_path:       string;
  popularity:        number;
  id:                number;
  backdrop_path:     string;
  vote_average:      number;
  overview:          string;
  first_air_date:    Date;
  origin_country:    string[];
  genre_ids:         number[];
  original_language: string;
  vote_count:        number;
  name:              string;
  original_name:     string;
}

export interface Movies {
  page:          number;
  results:       TrendMovies[] | TopRatedMovies[] | NowPlayingMovies[];
  total_pages:   number;
  total_results: number;
  dates?:         Dates;
}

interface TrendMovies {
  adult?:            boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: OriginalLanguage;
  original_title?:   string;
  overview:          string;
  poster_path:       string;
  release_date?:     Date;
  title?:            string;
  video?:            boolean;
  vote_average:      number;
  vote_count:        number;
  popularity:        number;
  first_air_date?:   Date;
  name?:             string;
  origin_country?:   string[];
  original_name?:    string;
}

interface TopRatedMovies {
  poster_path:       string;
  adult:             boolean;
  overview:          string;
  release_date:      Date;
  genre_ids:         number[];
  id:                number;
  original_title:    string;
  original_language: OriginalLanguage;
  title:             string;
  backdrop_path:     string;
  popularity:        number;
  vote_count:        number;
  video:             boolean;
  vote_average:      number;
}

interface NowPlayingMovies {
  poster_path:       string;
  adult:             boolean;
  overview:          string;
  release_date:      Date;
  genre_ids:         number[];
  id:                number;
  original_title:    string;
  original_language: OriginalLanguage;
  title:             string;
  backdrop_path:     string;
  popularity:        number;
  vote_count:        number;
  video:             boolean;
  vote_average:      number;
}

export interface Televisions {
  page:          number;
  results:       OnTheAirTelevisions[] | TopRatedTelevisions[];
  total_results: number;
  total_pages:   number;
}

interface OnTheAirTelevisions {
  poster_path:       string;
  popularity:        number;
  id:                number;
  backdrop_path:     null | string;
  vote_average:      number;
  overview:          string;
  first_air_date:    Date;
  origin_country:    string[];
  genre_ids:         number[];
  original_language: OriginalLanguage;
  vote_count:        number;
  name:              string;
  original_name:     string;
}
export interface TopRatedTelevisions {
  poster_path:       string;
  popularity:        number;
  id:                number;
  backdrop_path:     string;
  vote_average:      number;
  overview:          string;
  first_air_date:    Date;
  origin_country:    OriginCountry[];
  genre_ids:         number[];
  original_language: OriginalLanguage;
  vote_count:        number;
  name:              string;
  original_name:     string;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export enum OriginalLanguage {
  En = "en",
  It = "it",
  Zh = "zh",
  Fr = "fr",
  Ja = "ja",
  Sv = "sv",
  Ko = "ko",
}

export enum OriginCountry {
  GB = "GB",
  Jp = "JP",
  Us = "US",
}