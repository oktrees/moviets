import React from "react";
import styled from 'styled-components';

import { List, Loading } from 'components/common'
import { MovieType } from "store/movie/types";

interface Props {
  trendMovies: MovieType,
  topRatedMovies: MovieType,
}

const Movie: React.FC<Props> = ({
  trendMovies,
  topRatedMovies
}) => {
  if(trendMovies.loading || topRatedMovies.loading) return <Loading />

  return ( 
    <Container>
      <h2>인기영화</h2>
      <List listArr={trendMovies} keyword="movie" />
      
      <h2>평점높은영화</h2>
      <List listArr={topRatedMovies} keyword="movie" />
    </Container>
  )
}

const Container = styled.div`
  width: auto;
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
export default Movie;