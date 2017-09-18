import React, { Component } from 'react'

class Lift extends Component {
  render() {
    return <div>
        <ul>
          { this.props.lifts.map( (lift, idx) => <li key={ idx } className="lift">Name: { lift.name }<br/>
                                                                  Reps: { lift.reps }<br/>
                                                                  Weight: { lift.weight }</li>) }
        </ul>
      </div>
  }
}

export default Lift;
