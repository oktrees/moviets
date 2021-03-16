import React from "react";
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

const MainTemplate: React.FC<Props> = ({ children, footer, header }) => (
  <Containter className="page-template">
    <Header>{header}</Header>
    <Section>{children}</Section>
    <Footer>{footer}</Footer>
  </Containter>
);

const Containter = styled.div`
  margin: auto;
  width: 100%;
  display: grid;
  grid-template-rows: 80px auto auto 50px;
  grid-template-columns: 1fr minmax(auto, 800px) 1fr;
  grid-template-areas:
  "header header header"
  "slider slider slider"
  "section section section"
  "footer footer footer"; 
`

const Header = styled.header`
  width: calc(100% - 100px);
  margin: auto;
  grid-area: header;
`
const Slider = styled.section`
  width: 100%;
  height: auto;
  grid-area: slider;
  margin: auto;
`
const Section = styled.section`
  width: calc(100% - 100px);
  height: auto;
  grid-area: section;
  margin: auto;
`
const Footer = styled.footer`
  width: calc(100% - 100px);
  grid-area: footer;
  margin: auto;
`
export default MainTemplate; 