import { REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { CONST } from './actions';

const initialState = {
  trendMovies: {
    loading: false,
    error: null,
    data: null
  },
  topRatedMovies: {
    loading: false,
    error: null,
    data: null
  },
  nowPlayingMovies: {
    loading: false,
    error: null,
    data: null
  } 
};

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CONST.GET_TREND_MOVIES[REQUEST]:
      return { 
        ...state, 
        trendMovies: {
          loading: true,
        } 
      };
    case CONST.GET_TREND_MOVIES[SUCCESS]:
      return { 
        ...state, 
        trendMovies: {
          loading: false,
          data: action.payload
        } 
      };
    case CONST.GET_TREND_MOVIES[FAILURE]: 
      return { 
        ...state, 
        trendMovies: {
          loading: false,
          error: true,
          data: null
        } 
      };
    case CONST.GET_TOP_RATED_MOVIES[REQUEST]:
      return { 
        ...state, 
        topRatedMovies: {
          loading: true,
        } 
      };
    case CONST.GET_TOP_RATED_MOVIES[SUCCESS]:
      return { 
        ...state, 
        topRatedMovies: {
          loading: false,
          data: action.payload
        } 
      };
    case CONST.GET_TOP_RATED_MOVIES[FAILURE]: 
      return { 
        ...state, 
        topRatedMovies: {
          loading: false,
          error: true,
          data: null
        } 
      };
    case CONST.GET_NOW_PLAYING_MOVIES[REQUEST]:
      return { 
        ...state, 
        nowPlayingMovies: {
          loading: true,
        } 
      };
    case CONST.GET_NOW_PLAYING_MOVIES[SUCCESS]:
      return { 
        ...state, 
        nowPlayingMovies: {
          loading: false,
          data: action.payload
        } 
      };
    case CONST.GET_NOW_PLAYING_MOVIES[FAILURE]: 
      return { 
        ...state, 
        nowPlayingMovies: {
          loading: false,
          error: true,
          data: null
        } 
      };
    default:
      return state;
  }
};

export default movieReducer;