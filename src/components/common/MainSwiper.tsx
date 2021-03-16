import React from "react";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import 'swiper/swiper-bundle.css';

import { Image, ImageBack } from 'components/common';

SwiperCore.use([Navigation]);

interface Props {
  trendMovies: any,
  keyword: any,
}

const MainSwiper: React.FC<Props> = ({
  trendMovies,
  keyword
}) => ( 
  <Container>
    {console.log(trendMovies.data)}
    <Swiper
    navigation
    spaceBetween={30}
    slidesPerView={1}
    >         
      {trendMovies?.data?.results && trendMovies?.data?.results.map((result: any, i: number) => (          
        <SwiperSlide key={i}>
          <ImageBack 
            src={result.backdrop_path} 
            alt="posterImg" 
            width="1000" 
            height="800"              
          />
          <div className="seasonName">{result.name}</div>
          <div className="seasonDate">{result.air_date}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
)

const Container = styled.div`
  width: auto;
  color: white;
 
`
export default MainSwiper;