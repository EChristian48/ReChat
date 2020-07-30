import * as React from 'react'

import { LoggedInStatus } from '../hooks/useAuth'
import { Redirect } from 'react-router-dom'
type CheckAuthProps = {
  user: LoggedInStatus
}

const CheckAuth: React.FC<CheckAuthProps> = props => {
  if (props.user !== 'loading') {
    if (props.user === null) {
      return <Redirect to='/login' />
    } else {
      return <>{props.children}</>
    }
  }
  return <div></div>
}

export { CheckAuth }
