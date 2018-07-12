import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Subscription from './Subscription'
import Success from './Success'

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={Subscription} />
      <Route path="/success" component={Success} />
    </div>
  </Router>
)

export default App