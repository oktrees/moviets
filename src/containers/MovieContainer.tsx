import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { movieActions } from 'store/actions';

interface Props {
  // contacts: any,
  // getContact: any,
  // minus: any,
}

const MovieContainer: React.FC<Props> = (props) => {
  const { trendMovies, topRatedMovies } = useSelector((state: any) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getTrendMoviesRequest());
    dispatch(movieActions.getTopRatedMoviesRequest());
  },[dispatch])

  return (
    <div>
      <h1>Movie</h1>
      <h2>인기영화</h2>
      {trendMovies.loading && 'lodding...'}
      {trendMovies.data?.results[0] && trendMovies.data.results.map((result:any,i:any) => (<div key={i}>{result.title}</div>))}
      <h2>평점높은영화</h2>
      {topRatedMovies.loading && 'lodding...'}
      {topRatedMovies.data?.results[0] && topRatedMovies.data.results.map((result:any,i:any) => (<div key={i}>{result.title}</div>))}
    </div>
  );
}

export default MovieContainer;
