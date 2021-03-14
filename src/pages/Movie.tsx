import React from "react";
import { MainTemplate, Footer } from "components";
import { HeaderContainer, MovieContainer } from "containers";


const Movie: React.FC  = () => {
  return (
    <MainTemplate header={<HeaderContainer />} footer={<Footer />}>
      <MovieContainer />
    </MainTemplate>
  )
}

export default Movie;