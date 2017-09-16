import React, { Component } from 'react'
import axios from 'axios'
import createHistory from 'history/createBrowserHistory'
const history = createHistory();


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

  handleSubmit(event) {
    event.preventDefault();

    const params = new URLSearchParams();
    params.append('email', this.state.email);
    params.append('password', this.state.password);

    axios.post('http://localhost:3000/login', params)
    .then( res => {
      localStorage.setItem('token', res.data.token)
      history.go('/profile');
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
        </label><br />
        <label>
          Password:
          <input type="text" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
        </label><br />
        <input type="submit" value="Submit" /><br />
      </form>
    );
  }
}

export default LoginForm
