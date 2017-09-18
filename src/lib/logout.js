import React, { Component } from 'react'
import axios from 'axios'

import LoginForm from './login-form'

class Logout extends Component {
  componentDidMount(){
    const { id, token } = JSON.parse(localStorage.getItem('userInfo'))
    const params = new URLSearchParams();
    params.append('id', id);
    params.append('token', token);
    axios.post(`http://localhost:3000/logout`, params)
    .then( res => {
      localStorage.removeItem('userInfo')
    })
  }

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

export default Logout
