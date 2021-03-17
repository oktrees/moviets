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
  width: 100%;
  height: 100%;
  padding-left: 50px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 2px;
  a {
    margin-right: 20px;
  }
  @media screen and (max-width: 480px) {
    padding-left: 0px;
  }
`
const Logo = styled(Link)`
  font-size: 2.5rem;
  color: red;
`

export default Header;