import React, { Component } from 'react'
import axios from 'axios'
import PasswordMask from 'react-password-mask'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleEmailChange.bind(this);
    this.handleChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleAPILogin() {
    const params = new URLSearchParams();
    params.append('email', this.state.email);
    params.append('password', this.state.password);
    return axios.post('http://localhost:3000/login', params)
  }

  createUserInfoCookie(res) {
    const userInfo = { "id": res.data.id, "token": res.data.token }
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    history.push('/profile');
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleAPILogin()
    .then( res => { this.createUserInfoCookie(res) })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
        </label><br />
        <label>
          Password:
          <PasswordMask
            id="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handlePasswordChange.bind(this)}
          />
        </label><br />
        <input type="submit" value="Submit" /><br />
      </form>
    );
  }
}

export default LoginForm
