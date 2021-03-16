import React from "react";

import { List } from 'components/common'

interface Props {
  movies: any,
  televisions: any,
}

const Search: React.FC<Props> = ({
  movies,
  televisions
}) => (
  <div>
    <h1>Search</h1>
    <h2>movie 검색결과</h2>
    {movies?.data?.results[0] && <List listArr={movies} keyword="movie" />}
    
    <h2>tv 검색결과</h2>
    {televisions?.data?.results[0] && <List listArr={televisions} keyword="tv" />}
  </div>
)

export default Search;