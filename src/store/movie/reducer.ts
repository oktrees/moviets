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
  },
  detail: {
    loading: false,
    error: null,
    data: null
  },
  detailVideos: {
    loading: false,
    error: null,
    data: null
  },
  detailCredits: {
    loading: false,
    error: null,
    data: null
  },
  detailSimilars: {
    loading: false,
    error: null,
    data: null
  },
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
    case CONST.GET_DETAIL[REQUEST]:
      return { 
        ...state, 
        detail: {
          loading: true,
        } 
      };
    case CONST.GET_DETAIL[SUCCESS]:
      return { 
        ...state, 
        detail: {
          loading: false,
          data: action.payload
        } 
      };
    case CONST.GET_DETAIL[FAILURE]: 
      return { 
        ...state, 
        detail: {
          loading: false,
          error: true,
          data: action.error
        } 
      };
    case CONST.GET_DETAIL_VIDEOS[REQUEST]:
      return { 
        ...state, 
        detailVideos: {
          loading: true,
        } 
      };
    case CONST.GET_DETAIL_VIDEOS[SUCCESS]:
      return { 
        ...state, 
        detailVideos: {
          loading: false,
          data: action.payload
        } 
      };
    case CONST.GET_DETAIL_VIDEOS[FAILURE]: 
      return { 
        ...state, 
        detailVideos: {
          loading: false,
          error: true,
          data: action.error
        } 
      };
    case CONST.GET_DETAIL_CREDITS[REQUEST]:
      return { 
        ...state, 
        detailCredits: {
          loading: true,
        } 
      };
    case CONST.GET_DETAIL_CREDITS[SUCCESS]:
      return { 
        ...state, 
        detailCredits: {
          loading: false,
          data: action.payload
        } 
      };
    case CONST.GET_DETAIL_CREDITS[FAILURE]: 
      return { 
        ...state, 
        detailCredits: {
          loading: false,
          error: true,
          data: action.error
        } 
      };
    case CONST.GET_DETAIL_SIMILARS[REQUEST]:
      return { 
        ...state, 
        detailSimilars: {
          loading: true,
        } 
      };
    case CONST.GET_DETAIL_SIMILARS[SUCCESS]:
      return { 
        ...state, 
        detailSimilars: {
          loading: false,
          data: action.payload
        } 
      };
    case CONST.GET_DETAIL_SIMILARS[FAILURE]: 
      return { 
        ...state, 
        detailSimilars: {
          loading: false,
          error: true,
          data: action.error
        } 
      };
    default:
      return state;
  }
};

export default movieReducer;