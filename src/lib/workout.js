import React, { Component } from 'react'
import Lift from './lift';

class Workout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLifts: false,
    }
  }

  dateFormatter(val) {
    const vals = val.split('-')
    const year = vals[0]
    const month = vals[1]
    const day = vals[2].split('T')[0]
    return `${month}/${day}/${year}`
  }

  toggleLift(){
    this.setState({
      showLifts: !this.state.showLifts,
    });
  }

  render() {
    return (
      <div className="workout">
        <span className="date">Date: { this.dateFormatter(this.props.date) }</span><br/>
        <span className="focus">Focus: { this.props.focus }</span><br/>
        <div onClick={ () => this.toggleLift() }> Click to View Lifts </div>
          {
            this.state.showLifts && <Lift lifts={ this.props.lifts } />
          }
      </div>
    )
  }
}

export default Workout;
