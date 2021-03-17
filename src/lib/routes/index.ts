import { Home, Movie, Television, Search, Detail } from "pages";

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
    path: "/movie/:id",
    page: Detail,
    exact: true
  },
  {
    path: "/tv",
    page: Television,
    exact: true
  },
  {
    path: "/tv/:id",
    page: Detail,
    exact: true
  },
  {
    path: "/search",
    page: Search,
    exact: false
  }
];
