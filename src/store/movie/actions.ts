import { REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { createRequestTypes } from 'lib/redux/constants';

export const CONST = {
  GET_TREND_MOVIES: createRequestTypes("movie/GET_TREND_MOVIES"),
  GET_TOP_RATED_MOVIES: createRequestTypes("movie/GET_TOP_RATED_MOVIES"),
  GET_NOW_PLAYING_MOVIES: createRequestTypes("movie/GET_NOW_PLAYING_MOVIES"),
  GET_DETAIL: createRequestTypes("movie/GET_DETAIL"),
  GET_DETAIL_VIDEOS: createRequestTypes("movie/GET_DETAIL_VIDEOS"),
  GET_DETAIL_CREDITS: createRequestTypes("movie/GET_DETAIL_CREDITS"),
  GET_DETAIL_SIMILARS: createRequestTypes("movie/GET_DETAIL_SIMILARS"),
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


const getDetailRequest = (id: string) => ({
  type: CONST.GET_DETAIL[REQUEST],
  id,
})

const getDetailSuccess = (payload: any) => ({ 
  type: CONST.GET_DETAIL[SUCCESS],
  payload
})

const getDetailFailure = (error: any) => ({ 
  type: CONST.GET_DETAIL[FAILURE],
  error
})


const getDetailVideosRequest = (id: string) => ({
  type: CONST.GET_DETAIL_VIDEOS[REQUEST],
  id,
})

const getDetailVideosSuccess = (payload: any) => ({ 
  type: CONST.GET_DETAIL_VIDEOS[SUCCESS],
  payload
})

const getDetailVideosFailure = (error: any) => ({ 
  type: CONST.GET_DETAIL_VIDEOS[FAILURE],
  error
})


const getDetailCreditsRequest = (id: string) => ({
  type: CONST.GET_DETAIL_CREDITS[REQUEST],
  id,
})

const getDetailCreditsSuccess = (payload: any) => ({ 
  type: CONST.GET_DETAIL_CREDITS[SUCCESS],
  payload
})

const getDetailCreditsFailure = (error: any) => ({ 
  type: CONST.GET_DETAIL_CREDITS[FAILURE],
  error
})


const getDetailSimilarsRequest = (id: string) => ({
  type: CONST.GET_DETAIL_SIMILARS[REQUEST],
  id,
})

const getDetailSimilarsSuccess = (payload: any) => ({ 
  type: CONST.GET_DETAIL_SIMILARS[SUCCESS],
  payload
})

const getDetailSimilarsFailure = (error: any) => ({ 
  type: CONST.GET_DETAIL_SIMILARS[FAILURE],
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
  getNowPlayingMoviesFailure,
  getDetailRequest,
  getDetailSuccess,
  getDetailFailure,
  getDetailVideosRequest,
  getDetailVideosSuccess,
  getDetailVideosFailure,
  getDetailCreditsRequest,
  getDetailCreditsSuccess,
  getDetailCreditsFailure,
  getDetailSimilarsRequest,
  getDetailSimilarsSuccess,
  getDetailSimilarsFailure
}
