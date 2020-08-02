import * as React from 'react'
import { render } from 'react-dom'

import { App } from './App'

import * as firebase from 'firebase/app'
import 'firebase/functions'
import { firebaseConfig } from './firebaseConfig'

import '@fortawesome/fontawesome-free/css/all.css'
import '../styles/utils.css'

firebase.initializeApp(firebaseConfig)

// DEV ONLY
firebase.firestore().settings({
  host: 'localhost:8080',
  ssl: false,
})
firebase.functions().useFunctionsEmulator('http://localhost:5001')

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
