import React, { Component } from 'react'
import axios from 'axios'

class NewUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };

    this.handleChange = this.handleNameChange.bind(this);
    this.handleChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {

    axios.post('http://localhost:3000/api/v1/users', {
      "name": this.state.name,
      "email": this.state.email,
      "password": this.state.password,
    })
    .catch(err => console.log(err))
    .then( res => {
      console.log(res)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
        </label><br />
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
        </label><br />
        <label>
          Password:
          <input type="text" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
        </label><br />
        <input type="submit" value="Submit" /><br />
        <a href="#">Click here to create an account</a>
      </form>
    );
  }
}

export default NewUserForm
