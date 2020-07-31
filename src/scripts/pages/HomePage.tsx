import * as React from 'react'

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

type HomePageState = {}

class HomePage extends React.Component<{}, HomePageState> {
  logout = () => {
    location.href = '/#/logout'
  }

  render() {
    return (
      <AppBar>
        <Toolbar>
          <Typography style={{ flexGrow: 1 }} variant='h6'>
            ReChat
          </Typography>

          <Button variant='outlined' color='inherit' onClick={this.logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}

export { HomePage }
