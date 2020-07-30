import * as React from 'react'

import { Grid, Container } from '@material-ui/core'

import { auth } from 'firebase/app'
import 'firebase/auth'

const LogoutPage: React.FC = () => {
  auth().signOut()

  return (
    <Container>
      <Grid
        container
        alignItems='center'
        justify='center'
        className='full-height'>
        <Grid item>Kamu telah Logout</Grid>
      </Grid>
    </Container>
  )
}

export { LogoutPage }
