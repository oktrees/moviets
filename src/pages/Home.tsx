import React from "react";
import { MainTemplate, Footer } from "components";
import { HeaderContainer, HomeContainer, SliderContainer } from "containers";

const Home: React.FC = () => {
  return (
  <MainTemplate header={<HeaderContainer />} footer={<Footer />} slider={<SliderContainer />} >
    <HomeContainer />
  </MainTemplate>
  )
}

export default Home;