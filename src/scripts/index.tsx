import * as React from 'react'
import { render } from 'react-dom'

import { App } from './App'

import * as firebase from 'firebase/app'
import { firebaseConfig } from './firebaseConfig'

import '../styles/utils.css'

firebase.initializeApp(firebaseConfig)

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
