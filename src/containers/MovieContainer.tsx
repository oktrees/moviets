import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { movieActions } from 'store/actions';
import { Movie } from "components";
import { RootState } from "store/rootReducer";

interface Props {
}

const MovieContainer: React.FC<Props> = (props) => {
  const { trendMovies, topRatedMovies } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getTrendMoviesRequest());
    dispatch(movieActions.getTopRatedMoviesRequest());
  },[dispatch])

  return (
    <Movie
      trendMovies={trendMovies}
      topRatedMovies={topRatedMovies}
    />
  );
}

export default MovieContainer;
