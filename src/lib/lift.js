import React, { Component } from 'react'

class Lift extends Component {
  render() {
    return <div>
        <ul>
          { this.props.lifts.map( (lift, idx) => <li key={ idx }>{ lift.name }, { lift.reps }, { lift.weight }</li>) }
        </ul>
      </div>
  }
}

export default Lift;
