import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppPage from './containers/AppPage'
import BeerPage from './containers/BeerPage'
import About from './components/About'

export default (
  <Router>
    <div>
      <Route exact path="/" component={AppPage}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={BeerPage}/>
    </div>
  </Router>
)
