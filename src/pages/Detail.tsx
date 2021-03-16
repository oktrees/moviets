import React from "react";
import { useLocation, useParams } from "react-router-dom";

import { MainTemplate, Footer } from "components";
import { HeaderContainer, DetailContainer } from "containers";

const Deatil: React.FC = () => {
  const keyword = useLocation().pathname.split("/")[1];
  const { id } = useParams<{ id: string }>();
  return (
    <MainTemplate header={<HeaderContainer />} footer={<Footer />}>
      <DetailContainer id={id} keyword={keyword}/>
    </MainTemplate>
  )
}

export default Deatil;