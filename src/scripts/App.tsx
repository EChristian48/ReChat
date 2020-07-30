import * as React from 'react'
import { CssBaseline } from '@material-ui/core'

import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { LoginPage } from './pages/LoginPage'
import { useAuth } from './hooks/useAuth'
import { CheckAuth } from './components/CheckAuth'
import { LogoutPage } from './pages/LogoutPage'

const App: React.FC = () => {
  const user = useAuth()

  return (
    <CssBaseline>
      <Router>
        <Switch>
          {user && <Redirect from='/login' to='/home' />}

          <Route path='/login'>
            <LoginPage />
          </Route>

          <Route path='/home'>
            <CheckAuth user={user}>Home</CheckAuth>
          </Route>

          <Route path='/logout'>
            <CheckAuth user={user}>
              <LogoutPage />
            </CheckAuth>
          </Route>
        </Switch>
      </Router>
    </CssBaseline>
  )
}

export { App }
