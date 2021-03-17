import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { televisionActions } from 'store/actions';
import { Television } from "components";
import { RootState } from "store/rootReducer";

interface Props {
}

const TelevisionContainer: React.FC<Props> = (props) => {
  const { popualarTelevisions, topRatedTelevisions } = useSelector((state: RootState) => state.televisions);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(televisionActions.getPopualarTelevisionsRequest());
    dispatch(televisionActions.getTopRatedTelevisionsRequest());
  },[dispatch])

  return (
    <Television
      popualarTelevisions={popualarTelevisions}
      topRatedTelevisions={topRatedTelevisions}
    />
    
  );
}

export default TelevisionContainer;
