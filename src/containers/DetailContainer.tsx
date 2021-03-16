import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { movieActions, televisionActions } from 'store/actions';
import { Detail } from "components";
import { RootState } from "store/rootReducer";

interface Props {
  id: string,
  keyword: string,
}

const DetailContainer: React.FC<Props> = ({ id, keyword}) => {
  const keywardName = keyword === 'movie' ? 'movies' : 'televisions';
  const isMovie = keyword === 'movie' ? true : false;
  const { detail, detailVideos, detailCredits, detailSimilars } = useSelector((state: RootState) => state[keywardName]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (keyword === 'movie') {
      dispatch(movieActions.getDetailRequest(id));
      dispatch(movieActions.getDetailVideosRequest(id));
      dispatch(movieActions.getDetailCreditsRequest(id));
      dispatch(movieActions.getDetailSimilarsRequest(id));
    }else if (keyword === 'tv'){
      dispatch(televisionActions.getDetailRequest(id));
      dispatch(televisionActions.getDetailVideosRequest(id));
      dispatch(televisionActions.getDetailCreditsRequest(id));
      dispatch(televisionActions.getDetailSimilarsRequest(id));
    }
  },[dispatch, id, keyword])

  return (
    <Detail
      detail={detail}
      detailVideos={detailVideos}
      detailCredits={detailCredits}
      detailSimilars={detailSimilars}
      isMovie={isMovie}
    />
  );
}

export default DetailContainer;
