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
      <Route exact path="/" component={ Login }/>
      <Route path="/new-user" component={ NewUser }/>
    </div>
  </Router>
)
export default App
