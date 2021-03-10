import { Home, Movie, Tv, Search } from "pages";

export const routes = [
  {
    path: "/",
    page: Home,
    exact: true
  },
  {
    path: "/movie",
    page: Movie,
    exact: true
  },
  {
    path: "/tv",
    page: Tv,
    exact: true
  },
  {
    path: "/search",
    page: Search,
    exact: true
  }
];
