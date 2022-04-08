import { userStore } from '../../redux/store'
import { loginUser } from '../../redux/actions'

export const handlerLogin = (ev, userName) => {
  userStore.dispatch(loginUser(userName))
  window.location.href = '/'
}
