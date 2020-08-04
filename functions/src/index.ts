import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

import { User } from './databaseSchema'

admin.initializeApp()

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const createUserDocument = functions.auth.user().onCreate(user => {
  const userDocRef = admin.firestore().doc(`users/${user.uid}`)
  const userData: User = {
    name: user.displayName,
    photoUrl: user.photoURL,
  }

  return userDocRef.create(userData)
})

export { createUserDocument }
