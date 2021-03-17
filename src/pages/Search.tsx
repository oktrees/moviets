import React from "react";

import { MainTemplate, Footer } from "components";
import { HeaderContainer, SearchContainer } from "containers";

const Search: React.FC  = () => {
  return (
    <MainTemplate header={<HeaderContainer />} footer={<Footer />}>
      <SearchContainer />
    </MainTemplate>
  )
}

export default Search;