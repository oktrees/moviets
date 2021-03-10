
const GET_CONTACT = "GET_CONTACT";

const getContact = () => {
  return {
    type: GET_CONTACT,
    loading: true,
    error: false,
  }
}
const MINUS = "MINUS";

export const minus = () => {
  return {
    type: MINUS,
    loading: true,
    error: false,
  }
}
const Actions = {
  getContact,
  minus
}

export default Actions;