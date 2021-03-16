import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { searchActions } from 'store/actions';
import { Search } from "components";
import { RootState } from "store/rootReducer";

interface Props {
}

const SearchContainer: React.FC<Props> = (props) => {
  const { movies, televisions } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchActions.getMoviesRequest('action'));
    dispatch(searchActions.getTelevisionsRequest('action'));
  },[dispatch])

  return (
    <Search
      movies={movies}
      televisions={televisions}
    />
  );
}

export default SearchContainer;
