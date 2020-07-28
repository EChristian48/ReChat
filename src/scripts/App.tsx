import * as React from 'react'
import { CssBaseline } from '@material-ui/core'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { useCurrentUser } from './hooks/useCurrentUser'

import { LoginPage } from './pages/LoginPage'

const App: React.FC = () => {
  const user = useCurrentUser()

  return (
    <CssBaseline>
      <Router>
        <Switch>
          <Route path='/login'>
            <LoginPage />
          </Route>

          <Route path='/home'>Home</Route>

          <Route path='/logout'>Logout</Route>
        </Switch>
      </Router>
    </CssBaseline>
  )
}

export { App }
