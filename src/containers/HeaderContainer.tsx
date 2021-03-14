import React from 'react';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="App-header">
      header
      <Link to="/">home</Link>&nbsp;&nbsp;
      <Link to="/movie">movie</Link>&nbsp;&nbsp;
      <Link to="/tv">tv</Link>&nbsp;&nbsp;
      <Link to="/search">search</Link>&nbsp;&nbsp;

    </div>
  );
}

export default Header;
