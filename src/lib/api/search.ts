import client from 'lib/client';
//영화에서 검색
export const getSearchMovies = (queryString: string) => 
  client.get(`search/movie?${queryString}`);

//티비에서 검색
export const getSearchTelevisions = (queryString: string) => 
  client.get(`search/tv?${queryString}`);

  