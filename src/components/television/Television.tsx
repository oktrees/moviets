import React from "react";

import { List } from 'components/common'

interface Props {
  popualarTelevisions: any,
  topRatedTelevisions: any,
}

const Television: React.FC<Props> = ({
  popualarTelevisions,
  topRatedTelevisions
}) => (
  <div>
    <h1>Tv</h1>
    <h2>인기 프로그램 {popualarTelevisions.loading && 'loadding...'}</h2>
    {popualarTelevisions?.data?.results[0] && <List listArr={popualarTelevisions} keyword="tv" />}

    <h2>평점높은 프로그램 {topRatedTelevisions.loading && 'loadding...'}</h2>  
    {topRatedTelevisions?.data?.results[0] && <List listArr={topRatedTelevisions} keyword="tv" />}
  </div>
)

export default Television;