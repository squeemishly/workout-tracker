import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from './lib/login'
import Logout from './lib/logout'
import NewUser from './lib/new-user'
import Profile from './lib/profile'
import UserWorkouts from './lib/user-workouts'
import './App.css';

const App = () => (
  <Router>
    <div>
      <nav>
        <h3>Workout Tracker</h3>
        <ul>
          <li><Link to='#'>My Workouts</Link></li>
          <li><Link to='#'>All Lifts</Link></li>
          { localStorage.getItem('userInfo') && <li><Link to='/logout'>Logout</Link></li> }
          { !localStorage.getItem('userInfo') && <li><Link to='/'>Sign Up or Login</Link></li> }
        </ul>
      </nav>

      <Route exact path="/" component={ Login }/>
      <Route path="/logout" component={ Logout }/>
      <Route path="/new-user" component={ NewUser }/>
      <Route path="/profile" component={ Profile }/>
      <Route path="/user-workouts" component={ UserWorkouts }/>
    </div>
  </Router>
)
export default App
