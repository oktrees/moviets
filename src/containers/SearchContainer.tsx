import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { searchActions } from 'store/actions';
import { Search } from "components";
import { RootState } from "store/rootReducer";

interface Props {
}

const SearchContainer: React.FC<Props> = () => {
  const { movies, televisions } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const searchDispatch = (searchParam: string) => {
    dispatch(searchActions.getMoviesRequest(searchParam));
    dispatch(searchActions.getTelevisionsRequest(searchParam));
  }

  return (
    <Search
      movies={movies}
      televisions={televisions}
      searchDispatch={searchDispatch}
    />
  );
}

export default SearchContainer;
