import client from 'lib/client';

//오늘방영 방송
export const getAiringTodayTv = () => 
  client.get(`tv/airing_today`);

//방영중인 방송
export const getOnAirTv = () => 
  client.get(`tv/on_the_air`);

//인기 방송
export const getPopularTv = () => 
  client.get(`tv/popular`);

//평점순 방송
export const getTopRatedTv = () => 
  client.get(`tv/top_rated`);


//방송 상세정보
export const getTvDetail = (id: string) => 
  client.get(`tv/${id}`);

//관련영상
export const getTvVideos = (id: string) => 
  client.get(`tv/${id}/videos`);

//비슷한 방송
export const getTvCredits = (id: string) => 
  client.get(`tv/${id}/credits`);

//방송 크레딧
export const getTvSimilar = (id: string) => 
  client.get(`tv/${id}/similar`);


