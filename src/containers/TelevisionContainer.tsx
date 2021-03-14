import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { televisionActions } from 'store/actions';

interface Props {
  // contacts: any,
  // getContact: any,
  // minus: any,
}

const TelevisionContainer: React.FC<Props> = (props) => {
  const { popualarTelevisions, topRatedTelevisions, detail } = useSelector((state: any) => state.televisions);
  const dispatch = useDispatch(); 

  useEffect(() => {
    //85271
    dispatch(televisionActions.getPopualarTelevisionsRequest());
    dispatch(televisionActions.getTopRatedTelevisionsRequest());
    dispatch(televisionActions.getDetailRequest('85271'));
  },[dispatch])

  return (
    <div>
      {detail && console.log(detail)}
      <h1>Tv</h1>
      <h2>인기 프로그램 {popualarTelevisions.loading && 'loadding...'}</h2>
      
      {popualarTelevisions.data?.results[0] && popualarTelevisions.data.results.map((result:any,i:any) => (<div key={i}>{result.name}</div>))}
      <h1>Tv</h1>
      <h2>평점높은 프로그램 {topRatedTelevisions.loading && 'loadding...'}</h2>  
      {topRatedTelevisions.data?.results[0] && topRatedTelevisions.data.results.map((result:any,i:any) => (<div key={i}>{result.name}</div>))}
    </div>
  );
}

export default TelevisionContainer;
