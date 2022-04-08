const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const initialState = {
  name: '',
  login: false
}

export const userReducer = (userState = initialState, action) => {
  switch (action.type) {
    case LOGIN: return {
      ...userState,
      login: true,
      name: action.payload
    }

    case LOGOUT: return {
      ...userState,
      login: false,
      name: ''
    }
    default: return userState
  }
}
