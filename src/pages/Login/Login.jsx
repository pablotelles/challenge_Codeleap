import React, { useState } from 'react'
import { Title, Form, Container, UserName } from './styled'
import { connect } from 'react-redux'
import { Button } from '../../UI/commons'
import { handlerLogin } from './handlerLogin'

const Login = (user) => {
  const [userName, setUserName] = useState('')

  return (
        <Form action='/'>
            <Container>
                <Title>Welcome to CodeLeap network!</Title>
                <label htmlFor="username">Please enter your username</label>
                <UserName
                    id='username'
                    placeholder="John doe"
                    value={userName}
                    onChange={((ev) => setUserName(ev.target.value))}
                    ></UserName>
                 <Button onClick={(ev) => handlerLogin(ev, userName)}
                disabled={userName.length < 4}
                style={userName.length > 3
                  ? {
                      background: 'black',
                      transition: '0.5s'
                    }
                  : {
                      background: 'gray',
                      opacity: 0.6,
                      transition: '0.5s'
                    } }>ENTER</Button>
            </Container>
        </Form>
  )
}
const mapStateToProps = state => {
  return {
    user: state
  }
}

export default connect(mapStateToProps)(Login)
