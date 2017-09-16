import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Profile extends Component {
  render() {
    return (
      <div>
        <button><Link to='/user-workouts'>See All Workouts</Link></button>
      </div>
    )
  }
}

export default Profile
