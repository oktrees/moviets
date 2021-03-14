import { REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { CONST } from './actions';

const initialState = {
  onAirTelevisions: { 
    loading: false,
    error: null,
    data: null
  },
  topRatedTelevisions: {
    loading: false,
    error: null,
    data: null
  },
  popualarTelevisions: {
    loading: false,
    error: null,
    data: null
  },
  detail: {
    loading: false,
    error: null,
    data: null
  },
};

const televisionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CONST.GET_ON_AIR_TELEVISIONS[REQUEST]:
      return { 
        ...state, 
        onAirTelevisions: {
          loading: true,
        } 
      };
    case CONST.GET_ON_AIR_TELEVISIONS[SUCCESS]:
      return { 
        ...state, 
        onAirTelevisions: {
          loading: false,
          data: action.payload
        } 
      };
    case CONST.GET_ON_AIR_TELEVISIONS[FAILURE]: 
      return { 
        ...state, 
        onAirTelevisions: {
          loading: false,
          error: true,
          data: action.error
        } 
      };
    case CONST.GET_TOP_RATED_TELEVISIONS[REQUEST]:
      return { 
        ...state, 
        topRatedTelevisions: {
          loading: true,
        } 
      };
    case CONST.GET_TOP_RATED_TELEVISIONS[SUCCESS]:
      return { 
        ...state, 
        topRatedTelevisions: {
          loading: false,
          data: action.payload
        } 
      };
    case CONST.GET_TOP_RATED_TELEVISIONS[FAILURE]: 
      return { 
        ...state, 
        topRatedTelevisions: {
          loading: false,
          error: true,
          data: action.error
        } 
      };
    case CONST.GET_POPULAR_TELEVISIONS[REQUEST]:
      return { 
        ...state, 
        popualarTelevisions: {
          loading: true,
        } 
      };
    case CONST.GET_POPULAR_TELEVISIONS[SUCCESS]:
      return { 
        ...state, 
        popualarTelevisions: {
          loading: false,
          data: action.payload
        } 
      };
    case CONST.GET_POPULAR_TELEVISIONS[FAILURE]: 
      return { 
        ...state, 
        popualarTelevisions: {
          loading: false,
          error: true,
          data: action.error
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
    default:
      return state;
  }
};

export default televisionReducer;