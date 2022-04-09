import { userStore } from '../../redux/store/userStore'
import { loginUser } from '../../redux/actions/loginUserActions'

export const handlerLogin = (ev, userName) => {
  userStore.dispatch(loginUser(userName))
  window.location.href = '/'
}
