import { REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { createRequestTypes } from 'lib/redux/constants';
 
export const CONST = {
  GET_ON_AIR_TELEVISIONS: createRequestTypes("tv/GET_ON_AIR_TELEVISIONS"),
  GET_TOP_RATED_TELEVISIONS: createRequestTypes("tv/GET_TOP_RATED_TELEVISIONS"),
  GET_POPULAR_TELEVISIONS: createRequestTypes("tv/GET_POPULAR_TELEVISIONS"),
  GET_DETAIL: createRequestTypes("tv/GET_DETAIL"),
}
 
const getOnAirTelevisionsRequest = () => ({
  type: CONST.GET_ON_AIR_TELEVISIONS[REQUEST],
})

const getOnAirTelevisionsSuccess = (payload: any) => ({ 
  type: CONST.GET_ON_AIR_TELEVISIONS[SUCCESS],
  payload
})

const getOnAirTelevisionsFailure = (error: any) => ({ 
  type: CONST.GET_ON_AIR_TELEVISIONS[FAILURE],
  error
})


const getTopRatedTelevisionsRequest = () => ({
  type: CONST.GET_TOP_RATED_TELEVISIONS[REQUEST],
})

const getTopRatedTelevisionsSuccess = (payload: any) => ({ 
  type: CONST.GET_TOP_RATED_TELEVISIONS[SUCCESS],
  payload
})

const getTopRatedTelevisionsFailure = (error: any) => ({ 
  type: CONST.GET_TOP_RATED_TELEVISIONS[FAILURE],
  error
})


const getPopualarTelevisionsRequest = () => ({
  type: CONST.GET_POPULAR_TELEVISIONS[REQUEST],
})

const getPopualarTelevisionsSuccess = (payload: any) => ({ 
  type: CONST.GET_POPULAR_TELEVISIONS[SUCCESS],
  payload
})

const getPopualarTelevisionsFailure = (error: any) => ({ 
  type: CONST.GET_POPULAR_TELEVISIONS[FAILURE],
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

export const Actions = {
  getOnAirTelevisionsRequest,
  getOnAirTelevisionsSuccess,
  getOnAirTelevisionsFailure,
  getTopRatedTelevisionsRequest,
  getTopRatedTelevisionsSuccess,
  getTopRatedTelevisionsFailure,
  getPopualarTelevisionsRequest,
  getPopualarTelevisionsSuccess,
  getPopualarTelevisionsFailure,
  getDetailRequest,
  getDetailSuccess,
  getDetailFailure
}
