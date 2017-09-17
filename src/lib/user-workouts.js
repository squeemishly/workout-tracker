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
      this.setState(this.state.allWorkouts: workouts)
    })
    // .then( workouts => workouts.data.forEach( workout => this.state.allWorkouts.push(workout) ))
  }

  render() {
    return (
      <div>
        <h2>Workouts</h2>
        {this.state.allWorkouts.map(workout => {
          return (
            <div className="workout">
              Date: { workout.date }<br/>
              Focus: { workout.focus }<br/>
              Lifts: { workout.lifts }
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default UserWorkouts
