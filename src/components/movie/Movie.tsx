import React from "react";

import { List } from 'components/common'

interface Props {
  trendMovies: any,
  topRatedMovies: any,
}

const Movie: React.FC<Props> = ({
  trendMovies,
  topRatedMovies
}) => (
  <div>
    <h1>Movie</h1>
    <h2>인기영화</h2>
    {trendMovies.loading && 'lodding...'}
    {trendMovies?.data?.results[0] && <List listArr={trendMovies} keyword="movie" />}
    
    <h2>평점높은영화</h2>
    {topRatedMovies.loading && 'lodding...'}
    {topRatedMovies?.data?.results[0] && <List listArr={topRatedMovies} keyword="movie" />}
    </div>
)

export default Movie;