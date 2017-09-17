import React, { Component } from 'react'
import axios from 'axios'

// import { Link } from 'react-router-dom'

class UserWorkouts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allWorkouts: []
    }
  }

  componentDidMount() {
    const { id, token } = JSON.parse(localStorage.getItem('userInfo'))
    axios.get(`http://localhost:3000/api/v1/users/${id}/workouts`, {
      params: {
        token: token
      }
    })
    .then( workouts => {
      this.setState({
        allWorkouts: workouts.data
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Boudi the cat!</h2>
      </div>
    )
  }
}

export default UserWorkouts
