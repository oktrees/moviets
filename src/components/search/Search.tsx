import React from "react";
import styled from 'styled-components';

import { List, Loading } from 'components/common'
import { SearchType } from "store/search/types";
import { Input } from "./form"

interface Props {
  movies: SearchType;
  televisions: SearchType;
  searchDispatch: any;
}

const Search: React.FC<Props> = ({
  movies,
  televisions,
  searchDispatch
}) => (
  <Container>
    {(movies.loading || televisions.loading) && <Loading />}
    <Input searchDispatch={searchDispatch}/>
    {movies?.data?.results[0] && 
      <>
        <h2>movie 카테고리</h2>
        <List listArr={movies} keyword="movie" />
      </>
    }
    
    {televisions?.data?.results[0] &&
    <>
      <h2>tv 카테고리</h2>
      <List listArr={televisions} keyword="tv" />
    </> }
  </Container>
)

const Container = styled.div`
  width: auto;
  min-height: calc(100vh - 120px);
  color: white; 
  h2 {
    margin-top: 40px;
    margin-bottom: 15px;
    font-size: 28px;
    border-left: 3px solid rgba(255,0,0,0.7);
    padding-left:10px;
  }
  @media screen and (max-width: 480px) {
    h2 {
      margin-left: 5vw;
    }
  }  
`

export default Search;