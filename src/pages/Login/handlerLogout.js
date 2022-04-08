import { userStore } from '../../redux/store'
import { logoutUser } from '../../redux/actions'

export const handlerLogout = () => {
  userStore.dispatch(logoutUser())
  window.location.href = '/'
}
