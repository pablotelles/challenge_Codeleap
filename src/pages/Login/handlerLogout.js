import { userStore } from '../../redux/store/userStore'
import { logoutUser } from '../../redux/actions/loginUserActions'

export const handlerLogout = () => {
  userStore.dispatch(logoutUser())
  window.location.href = '/'
}
