import React from "react";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

interface Props {
  detailVideos: any;
  isMovie: boolean;
}

const DetailVideos: React.FC<Props> = ({
  detailVideos,
  isMovie
}) => (
  <Container>   
    <h2>{detailVideos?.data?.results[0] && "관련영상"}</h2>
    <Swiper
    navigation
    spaceBetween={30}
    slidesPerView={4}
    >
      {detailVideos.data.results.map((result: any, i: number) => (
        <SwiperSlide key={i}>
          <a href={`https://www.youtube.com/watch?v=${result.key}`} target="_blank" rel="noopener noreferrer" >
            <img src={`https://img.youtube.com/vi/${result.key}/0.jpg`} alt="contentsImg" width="100%" />        
          </a>
          <VideoName>{result.name}</VideoName>
        </SwiperSlide>
      ))}
    </Swiper>
    
  </Container>
)

const Container = styled.div`
  margin-top: 70px;
  color:white;
  h2 { 
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 600;
  }
`
const VideoName = styled.div`
  margin-top: 10px;
  font-size: 14px;
`

export default DetailVideos;