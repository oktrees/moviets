import React from "react";
import styled from 'styled-components';

import { List, Loading } from 'components/common'
import { MovieType } from "store/movie/types";
import { TelevisionType } from "store/television/types";

interface Props {
  nowPlayingMovies: MovieType;
  onAirTelevisions: TelevisionType;
}

const Home: React.FC<Props> = ({
  nowPlayingMovies,
  onAirTelevisions,
}) => (  
  <Container>
    {(nowPlayingMovies.loading || onAirTelevisions.loading) && <Loading />}
    <h2>상영중인 영화</h2>
    {nowPlayingMovies?.data?.results[0] && 
      <List 
        listArr={nowPlayingMovies} 
        keyword="movie"
    />}

    <h2>방영중인 프로그램</h2>
    {onAirTelevisions?.data?.results[0] && 
      <List 
        listArr={onAirTelevisions} 
        keyword="tv" 
    />}
  </Container>
)

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
export default Home;