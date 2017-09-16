import React, { Component } from 'react'
import NewUserForm from './new-user-form'

class NewUser extends Component {
  render() {
    return (
      <div>
        <h1>Create an Account</h1>
        <NewUserForm />
        <a href="#">Click here to return to login form</a>
      </div>
    )
  }
}

export default NewUser
