import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { movieActions } from 'store/actions';
import { Slider } from "components";
import { RootState } from "store/rootReducer";

interface Props {
}

const SliderContainer: React.FC<Props> = (props) => {
  const { nowPlayingMovies } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getNowPlayingMoviesRequest());
  },[dispatch])

  return (
    <Slider
      list={nowPlayingMovies}
    />
  );
}

export default SliderContainer;
