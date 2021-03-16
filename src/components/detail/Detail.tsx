import React from "react";
import styled from 'styled-components';

import { DetailInfo, DetailVideos, DetailCredits, DetailSimilars, DetailSeasons } from "./details";

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
  isMovie
}) => (
  <Containter>   
    {detail?.data && <DetailInfo detail={detail} isMovie={isMovie} /> } 
    {detailVideos?.data?.results && <DetailVideos detailVideos={detailVideos} isMovie={isMovie} /> } 
    {detail?.data?.seasons && <DetailSeasons detail={detail} /> } 
    {detailCredits?.data &&<DetailCredits detailCredits={detailCredits} /> }
    {detailSimilars?.data?.results &&<DetailSimilars detailSimilars={detailSimilars} isMovie={isMovie}/> }
  </Containter>
)
const Containter = styled.div`
  color: white;
  width: 100%;
  height: 100%;
`


export default Detail;