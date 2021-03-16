import React from "react";
import styled from 'styled-components';

import { List, MainSwiper } from 'components/common';

interface Props {
  trendMovies: any,
  onAirTelevisions: any,
}

const Home: React.FC<Props> = ({
  trendMovies,
  onAirTelevisions
}) => ( 
  <Container>
    <MainSwiper trendMovies={trendMovies} keyword="movie" />
    <h2>상영중인 영화</h2>
    {trendMovies?.data?.results[0] && <List listArr={trendMovies} keyword="movie" />}

    <h2>방영중인 프로그램</h2>
    {onAirTelevisions?.data?.results[0] && <List listArr={onAirTelevisions} keyword="tv" />}
  </Container>
)

const Container = styled.div`
  width: auto;
  color: white;
  position: relative;
 
`
export default Home;