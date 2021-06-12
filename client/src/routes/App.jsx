import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import AppContext from '@context/AppContext'
import useInitialState from '@hooks/useInitialState'
import Home from '@containers/home/Home'
import Items from '@containers/items/Items'
import Header from '../components/header/Header'
import '@styles/styleGlobal.scss'

const App = () => {
  const initialState = useInitialState(AppContext)

  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/items' component={Items}></Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  )
}

export default hot(App)