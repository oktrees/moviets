import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import 'swiper/swiper-bundle.css';

import { Image } from 'components/common';

SwiperCore.use([Navigation]);

interface Props {
  detailSimilars: any;
  isMovie: boolean;
}

const DetailSimilars: React.FC<Props> = ({
  detailSimilars,
  isMovie
}) => (
  <Container>   
    <h2>{detailSimilars?.data?.results[0] && "관련 영화 추천"}</h2>
    <Swiper
      navigation
      spaceBetween={30}
      slidesPerView={4}
    >
      {detailSimilars.data.results.map((result: any, i: number) => (
        <SwiperSlide key={i}>
          <Link to={isMovie ? `/movie/${result.id}` : `/tv/${result.id}`}>
            <Image 
              src={result.poster_path} 
              alt="posterImg" 
              width="200" 
              height="300"
            />
            <div className="titleName">
              {isMovie ? result.title : result.name}
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
)

const Container = styled.div`
  margin-top: 70px;
  h2 { 
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 600;
  }
  .titleName {
    margin-top: 10px;
  }
`

export default DetailSimilars;