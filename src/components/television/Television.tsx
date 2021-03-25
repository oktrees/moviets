import React from "react";
import styled from 'styled-components';

import { List, Loading } from 'components/common'
import { TelevisionType } from "store/television/types";

interface Props {
  popualarTelevisions: TelevisionType,
  topRatedTelevisions: TelevisionType,
}

const Television: React.FC<Props> = ({
  popualarTelevisions,
  topRatedTelevisions
}) => {
  if(popualarTelevisions.loading || topRatedTelevisions.loading) return <Loading />

  return (
    <Container>
      <h2>인기 프로그램</h2>
      <List listArr={popualarTelevisions} keyword="tv" />

      <h2>평점높은 프로그램</h2>  
      <List listArr={topRatedTelevisions} keyword="tv" />
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

export default Television;