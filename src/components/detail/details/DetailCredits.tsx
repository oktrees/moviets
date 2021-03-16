import React from "react";
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import 'swiper/swiper-bundle.css';

import { Image } from 'components/common';

SwiperCore.use([Navigation]);

interface Props {
  detailCredits: any;
}

const DetailCredits: React.FC<Props> = ({
  detailCredits,
}) => (
  <Container>   
    <SwiperBox>
      <h2>{detailCredits?.data?.cast[0] && "출연"}</h2>
      <Swiper
        navigation
        spaceBetween={30}
        slidesPerView={4}
      >
        {detailCredits?.data?.cast?.map((result: any, i: number) => (
          <SwiperSlide key={i}>
            <Image 
              src={result.profile_path} 
              alt="profileImg" 
              width="200" 
              height="300"              
            />
            <div className="castName">{result.name}</div>
            <div className="castCharacter">{result.character}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperBox>

    <SwiperBox>
      <h2>{detailCredits?.data?.crew[0] && "제작"}</h2>
      <Swiper
        navigation
        spaceBetween={30}
        slidesPerView={4}
      >
        {detailCredits?.data?.crew?.map((result: any, i: number) => (
          <SwiperSlide key={i}>
            <Image 
              src={result.profile_path} 
              alt="profileImg" 
              width="200" 
              height="300"
            />
            <div className="crewName">{result.name}</div>
            <div className="crewDepartment">{result.known_for_department}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperBox>
  </Container>
)

const Container = styled.div`
  margin-top: 70px;
  h2 { 
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 600;
  }
  .crewName, .castName {
    margin-top: 10px;
  }
  .crewDepartment, .castCharacter {
    margin-top: 2px;
    color: #ccc;
    font-size: 14px;
  }
`
const SwiperBox = styled.div`
  margin-top: 70px;
`


export default DetailCredits;