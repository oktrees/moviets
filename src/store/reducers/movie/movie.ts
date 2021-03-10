

const GET_CONTACT = "GET_CONTACT";
const MINUS = "MINUS";

export const getContact = () => {
  return {
    type: GET_CONTACT,
    loading: true,
    error: false,
  }
}
export const minus = () => {
  return {
    type: MINUS,
    loading: true,
    error: false,
  }
}

const movieReducer = (state = 0 , action: any) => {
  switch (action.type) {
    case GET_CONTACT: 
      return state + 1
    case MINUS:
      return state - 1
    default: 
      return state;
  }
}


export default movieReducer;

