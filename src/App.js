import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from './lib/login'
import NewUser from './lib/new-user'

const App = () => (
  <Router>
    <div>
      <nav>
        <h3>Workout Tracker</h3>
        <ul>
          <li><Link to='#'>My Workouts</Link></li>
          <li><Link to='#'>All Lifts</Link></li>
          <li><Link to='/'>Sign Up or Login</Link></li>
        </ul>
      </nav>

      <Route exact path="/" component={ Login }/>
      <Route path="/new-user" component={ NewUser }/>
    </div>
  </Router>
)
export default App
