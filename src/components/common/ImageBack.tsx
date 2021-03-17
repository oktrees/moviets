import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

interface Props {
  src: string;
  id: number;
  title: string;
  date : string;
  voteAverage: string;
  overview: string;
}

const ImageBack: React.FC<Props> = ({ 
  src,
  id,
  title,
  date,
  voteAverage,
  overview
}) => {
  return (
    <Container src={src}>
      <div className="imgBack" >
        <Header>현재 상영중</Header>
        <Contents>
          <div className="img-contents-left">
            <div>{title}</div>
            <div>{date} · 평점 {voteAverage}</div>
            <div><Link to={`/movie/${id}`}>상세보기</Link></div>
          </div>
          <div className="img-contents-right">
            <div>{overview}</div>
          </div>
        </Contents>
      </div>
    </Container>
  )
}

type ContainerType = {
  src: string;
};

const Container = styled.div<ContainerType>`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: rgb(0, 0, 0) 0px 0px 4px;
  .imgBack {
    width: 100%;
    height: 100%;
    background-image: url(${(props) => "https://image.tmdb.org/t/p/original" + props.src});
    background-position: center center;
    background-size: cover;
  }
  @media screen and (max-width: 480px) {
    .img-contents-right {
      display: none;
    }
  } 
`
const Header = styled.div`
  width: 90vw;
  height: 20vh;
  padding-top: 10vh;
  padding-left: 10vw;
  font-size: 50px;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 40px;
  } 
`
const Contents = styled.div`
  width: 90vw;
  height: 20vh;
  padding-top: 40vh;
  padding-left: 10vw;
  display: flex;
  justify-content: space-between;
  .img-contents-left {
    div:nth-child(1) {
      font-size: 40px;
      @media screen and (max-width: 480px) {
        font-size: 30px;
      } 
    }
    div:nth-child(2) {
      font-size: 30px;
      font-weight: 200;
      color: #eee;
      margin-top: 10px;
      @media screen and (max-width: 480px) {
        font-size: 20px;
      } 
    }
    div:nth-child(3) {
      font-weight: 400;
      font-size: 24px;
      margin-top: 15px;
      text-decoration: underline;
    }
  }
  .img-contents-right {
    width: 35vw;
    height: 15vh;
    line-height: 22px;
    div {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
    }
  }
  @media screen and (max-width: 480px) {
    padding-top: 45vh;
  } 
 
`

export default ImageBack; 