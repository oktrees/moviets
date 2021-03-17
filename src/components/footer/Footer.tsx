import React from "react";
import styled from 'styled-components';

const Footer: React.FC = () => (
  <Containter>
    <span>© COPYRIGHT 2021 oktrees API Powered by TMDB</span>
  </Containter>
);

const Containter = styled.div`
  width: 100%;
  height: 100%;
  grid-area: footer;
  color: #ccc;
  font-size: 12px;
  display: flex;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.5) 5px 1px 5px 2px;
`

export default Footer;
