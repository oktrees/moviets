import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import 'swiper/swiper-bundle.css';

import { Image } from 'components/common';

SwiperCore.use([Navigation]);

interface Props {
  listArr: any;
  keyword: string;
}

const List: React.FC<Props> = ({ listArr, keyword }) => {
  const onMouseEnterImg = (e:any) => {
    e.target.closest('.hoverBox').style.opacity = 1        
  }
  const onMouseLeaveImg = (e:any) => {
    e.target.closest('.hoverBox').style.opacity = 0     
  }
  
  if(!listArr?.data?.results[0]) return null;

  return (
    <Container>
      <Swiper
        navigation
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
        {listArr.data.results.map((result: any, i: number) => (
          <SwiperSlide key={i} className="swiperBox">
            <Link to={`/${keyword}/${result.id}`}>
              <HoverBox
                className="hoverBox"
                onMouseEnter={onMouseEnterImg}
                onMouseLeave={onMouseLeaveImg}
              >
                <div></div>
                <div>상세보기</div>
                <div><span>★</span> {result.vote_average} / 10</div>
              </HoverBox> 
              <Image 
                src={result.poster_path} 
                alt="contentsImg" 
                width="200" 
                height="300"
              />
            </Link>
            <Title>{keyword === 'movie' ? result.title : result.name}</Title>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
    .swiper-slide {
      width: 200px;
      margin-right: 50px;
    }
  @media screen and (max-width: 480px) {
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

const HoverBox = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid #eee;
  color: #eee;
  position: absolute;
  z-index: 1;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.1s ease-in-out 0s;
  padding: 5px;
  flex-direction: column;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  div:nth-child(1) {
    align-self: flex-start;
  }
  div:nth-child(2) {
    align-self: center;
  }
  div:nth-child(3) {
    align-self: flex-end;
    span {
      color: #FFFF76;
    }
  }
  img { 
    border-radius: 5px;
  }
`
const Title = styled.div`
  color: #eee;
  margin-top: 10px;
  font-size: 16px; 
    
`


export default List; 