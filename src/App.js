import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './Login'

function App() {
  return (
    <>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>

        <Route exact path='/'>
          <h1>African Marketplace</h1>
        </Route>
      </Switch>
    </>
  )
}

export default App;