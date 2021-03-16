import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { movieActions, televisionActions } from 'store/actions';
import { Home } from "components";
import { RootState } from "store/rootReducer";

interface Props {
} 

const HomeContainer: React.FC<Props> = (props) => {
  const { trendMovies } = useSelector((state: RootState) => state.movies);
  const { onAirTelevisions } = useSelector((state: RootState) => state.televisions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getTrendMoviesRequest());
    dispatch(televisionActions.getOnAirTelevisionsRequest());
  },[dispatch])

  return (
    <Home 
      trendMovies={trendMovies}
      onAirTelevisions={onAirTelevisions}
    />
  );
}

export default HomeContainer;
