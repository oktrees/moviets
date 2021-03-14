import { REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { createRequestTypes } from 'lib/redux/constants';

export const CONST = {
  GET_TREND_MOVIES: createRequestTypes("movie/GET_TREND_MOVIES"),
  GET_TOP_RATED_MOVIES: createRequestTypes("movie/GET_TOP_RATED_MOVIES"),
  GET_NOW_PLAYING_MOVIES: createRequestTypes("movie/GET_TOP_RATED_MOVIES"),
}

const getTrendMoviesRequest = () => ({
    type: CONST.GET_TREND_MOVIES[REQUEST],
})

const getTrendMoviesSuccess = (payload: any) => ({ 
    type: CONST.GET_TREND_MOVIES[SUCCESS],
    payload
})

const getTrendMoviesFailure = (error: any) => ({ 
    type: CONST.GET_TREND_MOVIES[FAILURE],
    error
}) 

const getTopRatedMoviesRequest = () => ({
  type: CONST.GET_TOP_RATED_MOVIES[REQUEST],
})

const getTopRatedMoviesSuccess = (payload: any) => ({ 
  type: CONST.GET_TOP_RATED_MOVIES[SUCCESS],
  payload
})

const getTopRatedMoviesFailure = (error: any) => ({ 
  type: CONST.GET_TOP_RATED_MOVIES[FAILURE],
  error
})

const getNowPlayingMoviesRequest = () => ({
  type: CONST.GET_NOW_PLAYING_MOVIES[REQUEST],
})

const getNowPlayingMoviesSuccess = (payload: any) => ({ 
  type: CONST.GET_NOW_PLAYING_MOVIES[SUCCESS],
  payload
})

const getNowPlayingMoviesFailure = (error: any) => ({ 
  type: CONST.GET_NOW_PLAYING_MOVIES[FAILURE],
  error
})

export const Actions = {
  getTrendMoviesRequest,
  getTrendMoviesSuccess,
  getTrendMoviesFailure,
  getTopRatedMoviesRequest,
  getTopRatedMoviesSuccess,
  getTopRatedMoviesFailure,
  getNowPlayingMoviesRequest,
  getNowPlayingMoviesSuccess,
  getNowPlayingMoviesFailure
}
