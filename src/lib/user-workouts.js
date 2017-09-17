import React, { Component } from 'react'
import axios from 'axios'

class UserWorkouts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allWorkouts: [],
      liftsVisible: false,
    }
  }

  getWorkouts() {
    const { id, token } = JSON.parse(localStorage.getItem('userInfo'))
    return axios.get(`http://localhost:3000/api/v1/users/${id}/workouts`, {
      params: {
        token: token
      }
    })
  }

  setAllWorkouts(workouts) {
    workouts.data.forEach( workout => this.state.allWorkouts.push(workout) )
    this.forceUpdate()
  }

  componentDidMount() {
    this.getWorkouts()
    .then( workouts => { this.setAllWorkouts(workouts) })
    .catch(err => console.error(err))
  }

  dateFormatter(val) {
    const vals = val.split('-')
    const year = vals[0]
    const month = vals[1]
    const day = vals[2].split('T')[0]
    return `${month}/${day}/${year}`
  }

  handleToggleClick() {
    this.setState({ liftsVisible: !this.state.liftsVisible })
  }

  showLifts(workout) {
    return workout.map( (lift, index) => {
      return (
        <div key={index} className="lift">
        { lift.name }: { lift.reps } reps at { lift.weight }<br/>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Workouts</h2>
        {this.state.allWorkouts.map(workout => {
          return (
            <div key={workout.id} className="workout">
              <span className="date">Date: { this.dateFormatter(workout.date) }</span><br/>
              <span className="focus">Focus: { workout.focus }</span><br/>
              <div onClick={() => this.handleToggleClick()}> Click to View Lifts </div>
                {
                  this.state.liftsVisible ? this.showLifts(workout.lifts) : null
                }
            </div>
          )
        })}
      </div>
    )
  }
}

export default UserWorkouts
