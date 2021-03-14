import { REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { CONST } from './actions';

const initialState = {
  movies: {
    loading: false,
    error: null,
    data: null
  },
  televisions: {
    loading: false,
    error: null,
    data: null
  },
};

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CONST.GET_MOVIES[REQUEST]:
      return { 
        ...state, 
        movies: {
          loading: true,
        } 
      };
    case CONST.GET_MOVIES[SUCCESS]:
      return { 
        ...state, 
        movies: {
          loading: false,
          data: action.payload
        } 
      };
    case CONST.GET_MOVIES[FAILURE]: 
      return { 
        ...state, 
        movies: {
          loading: false,
          error: true,
          data: null
        } 
      };
    case CONST.GET_TELEVISIONS[REQUEST]:
      return { 
        ...state, 
        televisions: {
          loading: true,
        } 
      };
    case CONST.GET_TELEVISIONS[SUCCESS]:
      return { 
        ...state, 
        televisions: {
          loading: false,
          data: action.payload
        } 
      };
    case CONST.GET_TELEVISIONS[FAILURE]: 
      return { 
        ...state, 
        televisions: {
          loading: false,
          error: true,
          data: null
        } 
      };
    default:
      return state;
  }
};

export default searchReducer;