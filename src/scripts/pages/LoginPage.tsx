import * as React from 'react'

import * as firebase from 'firebase/app'
import 'firebase/auth'

class LoginPage extends React.Component {
  async componentDidMount() {
    await firebase.auth().getRedirectResult()
    console.log('asd')
  }
  render() {
    return (
      <div>
        <div>asda</div>
      </div>
    )
  }
}

export { LoginPage }
