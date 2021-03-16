import React from "react";
import styled from 'styled-components';

const Footer: React.FC = () => (
  <Containter>
    <br/><br/><br/>
    footer
  </Containter>
);

const Containter = styled.div`
  grid-area: footer;
  color: white;
`

export default Footer;
