import React, { Component } from 'react'
import LoginForm from './login-form'

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm />
        <a href="/new-user">Click here to create an account</a>
      </div>
    )
  }
}

export default Login
