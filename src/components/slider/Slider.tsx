import React from "react";
import styled from 'styled-components';

import { MainSwiper, Loading } from 'components/common';

interface Props {
  list: any,
}

const Slider: React.FC<Props> = ({
  list,
}) => (
  <Container>    
    {list.loading && <Loading />}
    {list?.data?.results[0] && <MainSwiper list={list} keyword="movie" /> }
  </Container>
)

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  color: white; 
`

export default Slider;