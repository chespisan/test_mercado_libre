import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import Home from '@containers/home/Home'
import '../styles/styleGlobal.scss'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
      </Switch>
    </Router>
  )
}

export default hot(App)