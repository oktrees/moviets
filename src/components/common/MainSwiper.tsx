import React from "react";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import 'swiper/swiper-bundle.css';

import { ImageBack } from 'components/common';

SwiperCore.use([Navigation]);

interface Props {
  list: any,
  keyword: any,
}

const MainSwiper: React.FC<Props> = ({
  list,
  keyword
}) => ( 
  <Container>
    <Swiper
    navigation
    slidesPerView={1}
    >         
      {list?.data?.results && list?.data?.results.map((result: any, i: number) => (          
        <SwiperSlide key={i}>
          <ImageBack 
            src={result.backdrop_path} 
            id={result.id}
            title={result.title}
            date={result.release_date}
            voteAverage={result.vote_average}
            overview={result.overview}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
)

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  color: white; 
`
export default MainSwiper;