import React from "react";
import { MainTemplate, Footer } from "components";
import { HeaderContainer, TelevisionContainer } from "containers";

const Television: React.FC = () => {
  return (
    <MainTemplate header={<HeaderContainer />} footer={<Footer />}>
      <TelevisionContainer />
    </MainTemplate>
  )
}

export default Television;