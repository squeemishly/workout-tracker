import React, { Component } from 'react'

class Lifts extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    { props.workout.map( (lift, index) => {
      return (
        <div key={index} className="lift">
        { lift.name }: { lift.reps } reps at { lift.weight }<br/>
        </div>
      )
    })})
  }
}

export default Lifts
