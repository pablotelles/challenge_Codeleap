const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

export function loginUser (userName) {
  return {
    type: LOGIN,
    payload: userName
  }
}
export function logoutUser () {
  return {
    type: LOGOUT
  }
}
