import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import ROUTES from '@routes/routes'
import AppContext from '@context/AppContext'
import Home from '@containers/home/Home'
// import Items from '@containers/items/Items'
// import ItemDetail from '@containers/item-detail/ItemDetail'
import Header from '@components/header/Header'
import useInitialState from '@hooks/useInitialState'
import '@styles/styleGlobal.scss'

const AsyncItemsContainer = React.lazy(() => import('@containers/items/Items'))

const AsyncItemDetailContainer = React.lazy(() => import('@containers/item-detail/ItemDetail'))

const App = () => {
  const initialState = useInitialState(AppContext)

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <AppContext.Provider value={initialState}>
        <Router>
          <Header />
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home}></Route>
            <Route exact path={ROUTES.ITEMS} component={AsyncItemsContainer}></Route>
            <Route exact path={ROUTES.ITEM_DETAIL} component={AsyncItemDetailContainer}></Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </Suspense>
  )
}

export default hot(App)
