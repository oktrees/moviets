import React from "react";
import styled from 'styled-components';

import { DetailInfo, DetailVideos, DetailCredits, DetailSimilars, DetailSeasons } from "./details";
import { Loading } from 'components/common'

interface Props {
  detail: any;
  detailVideos: any;
  detailCredits: any;
  detailSimilars: any;
  isMovie: boolean; 
}
 
const Detail: React.FC<Props> = ({
  detail,
  detailVideos,
  detailCredits,
  detailSimilars,
  isMovie,
}) => {
  if (detail.loading 
    || detailVideos.loading 
    || detailCredits.loading 
    || detailSimilars.loading
  ) return <Loading /> 

  return (
    <Containter>  
      <DetailInfo detail={detail} isMovie={isMovie}/>
      <DetailVideos detailVideos={detailVideos} isMovie={isMovie} /> 
      <DetailSeasons detail={detail} /> 
      <DetailCredits detailCredits={detailCredits} />
      <DetailSimilars detailSimilars={detailSimilars} isMovie={isMovie}/>
    </Containter>
  )
}

const Containter = styled.div`
  color: white;
  width: 100%;
  height: 100%;
`


export default Detail;