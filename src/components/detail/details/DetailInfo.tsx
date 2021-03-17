import React from "react";
import styled from 'styled-components';

import { Image } from 'components/common';

interface Props {
  detail: any
  isMovie: boolean;
}

const DetailInfo: React.FC<Props> = ({
  detail,
  isMovie
}) => (
  <Containter>   
    <BackImg imgUrl={detail?.data && detail.data.backdrop_path}></BackImg>   
    <ImgBox>
      <Image 
        src={detail.data.poster_path}         
        alt="posterImg" 
        width="300" 
        height="450"
      />
    </ImgBox>
    <Info>
      <h1>
        {isMovie ? detail.data.title : detail.data.name}
      </h1>
      <div className="originName">
        {isMovie ? detail.data.original_title : detail.data.original_name}
      </div>
      <InfoBox>
        <ul>          
          <li>
            <span>              
              {isMovie ? "개봉" : "방영"}
            </span>
              {isMovie ? detail.data.release_date : 
                (detail?.data?.next_episode_to_air?.air_date ? 
                  detail.data.next_episode_to_air.air_date :
                  detail.data.last_air_date
                )
              }
          </li>
          <li>
            <span>
            {isMovie ? "시간" : "시즌" }
            </span> 
            {isMovie ? 
              detail.data.runtime+"분" : 
              detail.data.number_of_seasons + " " + 
              (detail.data?.next_episode_to_air?.episode_number ? 
                detail.data?.next_episode_to_air?.episode_number + "화" :
                detail.data?.last_episode_to_air?.episode_number + "화" 
              )}
          </li>
          <li>
            <span>평점</span> 
            {detail.data.vote_average}
          </li>
          <li>
            <span>장르</span>
            {detail.data.genres.map((val: any) => val.name).join(' · ')}
          </li>
          <li>
            <span>국가</span>
            {detail.data.production_countries[0]?.name}
          </li>
        </ul>
        <div>{detail.data.overview}</div>        
      </InfoBox>
    </Info>
  </Containter>
)

type activeType = {
  imgUrl: string;
};

const Containter = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 100%;
  color: white;
  display: flex;
  gap: 70px; 
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }  
  @media screen and (max-width: 480px) {

  }  
`
const BackImg = styled.div<activeType>`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-image: url(${props => props?.imgUrl ? "https://image.tmdb.org/t/p/original/" + props.imgUrl : null});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1;
`
const ImgBox = styled.div`
  grid-area: img;
`
const Info = styled.div`
  width: 100%;
  height: 100%;
  grid-area: info;
  h1 {
    font-size: 48px;  
  }
  .originName {
    margin-top: 13px;
    margin-left: 10px;
    font-size: 16px;
    color: #ccc;
  }
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 32px;  
      margin-left: 5vw;
    }
    .originName {
      font-size: 14px;
      margin-left: 5vw;
    }
  }  

`
const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  min-height: 450px;
  margin-top: 20px;
  border-radius: 10px;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  line-height: 25px;
  color: #eee;
  ul {
    border-left: 3px solid rgba(255, 220, 220, 0.6);
    border-radius: 3px;
    padding-left: 10px;
    margin-bottom: 30px;
    li {
      margin-bottom: 3px;
      span {
        color: #ccc;
        margin-right: 10px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    width: 90vw;
    margin-left: 5vw;
  }
`

export default DetailInfo;