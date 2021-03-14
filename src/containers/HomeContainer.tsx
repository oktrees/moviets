import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { movieActions, televisionActions } from 'store/actions';

interface Props {
  // contacts: any,
  // getContact: any,
  // minus: any,
}

const HomeContainer: React.FC<Props> = (props) => {
  const { trendMovies } = useSelector((state: any) => state.movies);
  const { onAirTelevisions } = useSelector((state: any) => state.televisions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getTrendMoviesRequest());
    dispatch(televisionActions.getOnAirTelevisionsRequest());
  },[dispatch])

  return (
    <div>
      <h1>Home</h1>

      <h2>상영중인 영화</h2>
      {trendMovies.data?.results[0] && trendMovies.data.results.map((result:any,i:any) => (<div key={i}>{result.title}</div>))}

      <h2>방영중인 프로그램</h2>
      {onAirTelevisions.data?.results[0] && onAirTelevisions.data.results.map((result:any,i:any) => (<div key={i}>{result.name}</div>))}
    </div>
  );
}

export default HomeContainer;
