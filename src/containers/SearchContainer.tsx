import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { searchActions } from 'store/actions';

interface Props {
  // contacts: any,
  // getContact: any,
  // minus: any,
}

const SearchContainer: React.FC<Props> = (props) => {
  const { movies, televisions } = useSelector((state: any) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchActions.getMoviesRequest('action'));
    dispatch(searchActions.getTelevisionsRequest('action'));
  },[dispatch])

  return (
    <div>
      <h1>Search</h1>
      <h2>movie 검색결과</h2>
      {movies.data?.results[0] && movies.data.results.map((result:any,i:any) => (<div key={i}>{result.title}</div>))}
      
      <h2>tv 검색결과</h2>
      {televisions.data?.results[0] && televisions.data.results.map((result:any,i:any) => (<div key={i}>{result.name}</div>))}
    </div>
  );
}

export default SearchContainer;
