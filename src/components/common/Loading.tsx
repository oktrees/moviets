import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";


function Loading() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  
  return (
    <Container>
      <LoadingCircle strokeDasharray={251}>
        <circle cx="50%" cy="50%" r="40"></circle>
      </LoadingCircle>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const circleRotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const strokeOffsetAnimation = keyframes`
  0% {
    stroke-dashoffset: 0
  }
  75% {
    stroke-dashoffset: -240
  }
  100% {
    stroke-dashoffset: -251
  }
`;

const LoadingCircle = styled.svg`
  width: 90px;
  height: 90px;
  animation: ${circleRotateAnimation} 2s infinite;
  circle {
    stroke: #000;
    stroke-width: 10;
    fill: none;
    animation: ${strokeOffsetAnimation} 1s infinite;
  }
`;
export default Loading;