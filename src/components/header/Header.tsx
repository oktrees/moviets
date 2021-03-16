import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

interface Props {
}

const Header: React.FC<Props> = (
  
) => (
  <Containter className="App-header">
    <Logo to="/">OKTV</Logo>
    <Link to="/movie">MOVIE</Link>
    <Link to="/tv">TV</Link>
    <Link to="/search">SEARCH</Link>
  </Containter>
)

const Containter = styled.div`
  grid-area: header;
  font-family: Oswald, sans-serif;
  color: white;
  font-size: 1.2rem;
  a {
    margin-right: 20px;
  }
`
const Logo = styled(Link)`
  font-size: 2.5rem;
  color: red;
`

export default Header;