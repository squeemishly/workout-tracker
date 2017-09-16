import React, { Component } from 'react'
import axios from 'axios'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };

    this.handleChange = this.handleNameChange.bind(this);
    this.handleChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {

    axios.post('http://localhost:3000/login', {
      "email": this.state.name,
      "password": this.state.password,
    })
    .then( user => {
      console.log(user.data)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default LoginForm
