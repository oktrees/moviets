import React from "react";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import 'swiper/swiper-bundle.css';

import { Image } from 'components/common';

SwiperCore.use([Navigation]);

interface Props {
  detail: any;
}

const DetailSeasons: React.FC<Props> = ({
  detail
}) => (
  <Container>   
    <h2>{detail?.data?.seasons[1] && "시즌"}</h2>    
    <Swiper
    navigation
    spaceBetween={30}
    slidesPerView={4}
    >
      {detail?.data?.seasons[1] && detail?.data?.seasons?.map((result: any, i: number) => (
        <SwiperSlide key={i}>
          <Image 
              src={result.poster_path} 
              alt="profileImg" 
              width="200" 
              height="300"              
            />
            <div className="seasonName">{result.name}</div>
            <div className="seasonDate">{result.air_date}</div>
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
  .seasonName {
    margin-top: 10px;
  }
  .seasonDate {
    margin-top: 5px;
    font-size: 14px;
    color: #ccc;
  }
`

export default DetailSeasons;