import React from "react";
import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;
  width: string;
  height: string;
}

const Image: React.FC<Props> = ({ src, alt, width, height }) => {
  const onErrorImg = (e: any) => {
    e.target.src = "/images/noImage.png"
    e.target.width= 100
    e.target.height= 130
    e.target.align= "center"
  }
  return (
    <Container width={width} height={height} src={src}>
      <img src={
        src ? `https://image.tmdb.org/t/p/w${width}/${src}` : "/images/noImage.png"} 
        width={src || 100}
        alt={alt} 
        onError={onErrorImg}
      />
    </Container>
  )
}

type ContainerType = {
  width: string;
  height: string;
  src: string;
};

const Container = styled.div<ContainerType>`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 5px;
  }
`

export default Image; 