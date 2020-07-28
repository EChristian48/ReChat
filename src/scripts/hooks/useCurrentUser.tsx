import { auth } from 'firebase/app'
import 'firebase/auth'

const useCurrentUser = () => auth().currentUser

export { useCurrentUser }
