import React from "react";
import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;
  width: string;
  height: string;
}

const ImageBack: React.FC<Props> = ({ src, alt, width, height }) => {
  const onErrorImg = (e: any) => {
    // e.target.src = "/images/noImage.png"
    // e.target.width= 100
    // e.target.height= 130
    // e.target.align= "center"
  }
  return (
    <Container width={width} height={height} src={src}>
      <div className="imgBack" ></div>
    </Container>
  )
}

type ContainerType = {
  width: string;
  height: string;
  src: string;
};

const Container = styled.div<ContainerType>`
  width: 100vw;
  height: ${(props) => props.height + 'px'};
  display: flex;
  justify-content: center;
  align-items: center;

  .imgBack {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => "https://image.tmdb.org/t/p/original" + props.src});
    background-position: center center;
    background-size: cover;
    z-index: -1;
  }
`

export default ImageBack; 