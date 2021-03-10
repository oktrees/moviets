import React, { useEffect } from 'react';
import { connect } from "react-redux";
import movie from "store/actions/movie";
import axios, { AxiosInstance, AxiosResponse } from "axios";

interface Props {
  contacts: any,
  getContact: any,
  minus: any,
}

const Home: React.FC<Props> = (props) => {
  useEffect(() => {
    // console.log(props.getContact())
    test();
  })
  const test = async () => {
    const test = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=c470e0476d281404a5ee781d4da74864");
    console.log(test);
  }
  const clickPuls = (() => {
    props.getContact();
  })
  const clickMinus = (() => {
    props.minus();
  })
  return (
    <div>
      <h1>Home</h1>
      <button onClick={clickPuls}>+</button>
      <span>{props.contacts}</span>
      <button onClick={clickMinus}>-</button>
    </div>
  );
}


const mapStateToProps = (state: any, ownProps: any) => {
  console.log(state);
  return { contacts: state.movie };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return { 
    getContact: () => dispatch(movie.getContact()),   
    minus: () => dispatch(movie.minus()),   
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
