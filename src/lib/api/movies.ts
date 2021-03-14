import client from 'lib/client';

export const getUserProfile = () =>
  client.get(`trending/movie/day`);

//오늘의 인기영화
export const getTodayMovies = () => 
  client.get(`trending/movie/day`);

//주간 인기영화
export const getWeeklyMovies = () =>
  client.get(`trending/movie/week`);

//오늘의 인기영화
export const getPopularMovies = () => 
  client.get(`movie/popular`);

//평점높은 영화
export const getTopRatedMovies = () => 
  client.get(`movie/top_rated`);

//상영중인 영화
export const getNowPlayingMovies = () => 
  client.get(`movie/now_playing`);



//영화 상세정보
export const getMovieDetail = () => 
  client.get(`movie/{id}`);

//비슷한 영화
export const getMovieCredits = () => 
  client.get(`movie/{}/credits`);

//영화 크레딧
export const getSimilarMovie = () => 
  client.get(`movie/{}/similar`);




export interface GithubProfile {

}