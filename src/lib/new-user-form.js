import React, { Component } from 'react'
import axios from 'axios'
import PasswordMask from 'react-password-mask'
import createHistory from 'history/createBrowserHistory'
const history = createHistory();

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

  handleNewUserAPICall() {
    const params = new URLSearchParams()
    params.append('name', this.state.name)
    params.append('email', this.state.email)
    params.append('password', this.state.password)
    return axios.post('http://localhost:3000/api/v1/users', params)
  }

  createUserInfoCookie(res) {
    const userInfo = { "id": res.data.id, "token": res.data.token }
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    history.push('/profile');
  }

  handleSubmit(event) {
    event.preventDefault()
    this.handleNewUserAPICall()
    .then( res => { this.createUserInfoCookie(res) })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:<br />
          <input
            type="text"
            className="input-field"
            value={this.state.name}
            onChange={this.handleNameChange.bind(this)} />
        </label><br />
        <label>
          Email:<br />
          <input
            type="text"
            className="input-field"
            value={this.state.email}
            onChange={this.handleEmailChange.bind(this)} />
        </label><br />
        <label>
          Password:
          <PasswordMask
            id="password"
            name="password"
            className="input-field"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handlePasswordChange.bind(this)}
          />
        </label><br />
        <input
          type="submit"
          className="btn btn-submit"
          value="Submit" /><br />
      </form>
    );
  }
}

export default NewUserForm
