import React from 'react'
import { HeaderSlyled, Title, UserInfo } from './styled'
import { userStore } from '../../redux/store'
import { handlerLogout } from '../../pages/Login/handlerLogout'
const Header = () => {
  const user = userStore.getState()
  return (
        <HeaderSlyled>
            <Title>CodeLeap Network</Title>
            <UserInfo>
              <p>@{user.name}</p>
              <a
              onClick={handlerLogout}
              >logout</a>
            </UserInfo>
        </HeaderSlyled>
  )
}

export default Header
