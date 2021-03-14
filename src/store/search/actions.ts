import { REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { createRequestTypes } from 'lib/redux/constants';

export const CONST = {
  GET_MOVIES: createRequestTypes("search/GET_MOVIES"),
  GET_TELEVISIONS: createRequestTypes("search/GET_TELEVISIONS"),
}

const getMoviesRequest = (queryString: string) => ({
    type: CONST.GET_MOVIES[REQUEST],
    queryString: `query=${queryString}`,
})

const getMoviesSuccess = (payload: any) => ({ 
    type: CONST.GET_MOVIES[SUCCESS],
    payload
})

const getMoviesFailure = (error: any) => ({ 
    type: CONST.GET_MOVIES[FAILURE],
    error
}) 

const getTelevisionsRequest = (queryString: string) => ({
  type: CONST.GET_TELEVISIONS[REQUEST],
  queryString: `query=${queryString}`,
})

const getTelevisionsSuccess = (payload: any) => ({ 
  type: CONST.GET_TELEVISIONS[SUCCESS],
  payload
})

const getTelevisionsFailure = (error: any) => ({ 
  type: CONST.GET_TELEVISIONS[FAILURE],
  error
})

export const Actions = {
  getMoviesRequest,
  getMoviesSuccess,
  getMoviesFailure,
  getTelevisionsRequest,
  getTelevisionsSuccess,
  getTelevisionsFailure,
}
