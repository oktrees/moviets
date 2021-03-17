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
      spaceBetween={50}
      breakpoints={{
        480: {
          width: 480,
          slidesPerView: 1,
          centeredSlides: true,
        },
        481: {
          width: 481,
          slidesPerView: "auto",
        },
      }}
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
    border-left: 3px solid rgba(255,0,0,0.7);
    padding-left:10px;
  }
  .titleName {
    margin-top: 10px;
  }
  .swiper-slide {
    width: 200px;
  }
  @media screen and (max-width: 480px) {
    h2 { 
      margin-left: 5vw;
    }   
    .swiper-container {
    }
    .swiper-slide {
      margin-right: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
    } 
  }
`

export default DetailSimilars;