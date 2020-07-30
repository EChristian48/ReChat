import * as React from 'react'

import { Button, Grid, Container, Icon } from '@material-ui/core'

import * as firebase from 'firebase/app'
import 'firebase/auth'

type LoginPageState = {
  isLoading: boolean
}

class LoginPage extends React.Component<{}, LoginPageState> {
  login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  async componentDidMount() {
    await firebase.auth().getRedirectResult()
  }

  render() {
    return (
      <Container>
        <Grid
          container
          alignItems='center'
          justify='center'
          className='full-height'>
          <Grid item>
            <Button
              onClick={this.login}
              variant='contained'
              color='primary'
              endIcon={<Icon className='fab fa-google' />}>
              Login With
            </Button>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export { LoginPage }
