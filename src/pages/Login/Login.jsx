import React, { useState } from 'react'
import { Title, Form, Container } from './styled'
import { connect } from 'react-redux'
import { Button, Input } from '../../UI/commons'
import { handlerLogin } from './handlerLogin'

const Login = (user) => {
  const [userName, setUserName] = useState('')

  return (
        <Form action='/'>
            <Container>
                <Title>Welcome to CodeLeap network!</Title>
                <label htmlFor="username">Please enter your username</label>
                <Input
                    id='username'
                    placeholder="John doe"
                    value={userName}
                    onChange={((ev) => setUserName(ev.target.value))}
                    ></Input>
                 <Button onClick={(ev) => handlerLogin(ev, userName)}
                disabled={userName.length < 4}
                style={userName.length > 3
                  ? {
                      background: 'black',
                      transition: '0.5s',
                      marginTop: '20px'
                    }
                  : {
                      background: 'gray',
                      opacity: 0.6,
                      transition: '0.5s',
                      marginTop: '20px'
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
