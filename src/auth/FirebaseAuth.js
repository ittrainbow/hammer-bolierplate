import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { firebaseConfig } from '../configs/FirebaseConfig'
import { GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from 'firebase/auth'

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()
const facebookAuthProvider = new FacebookAuthProvider()
const twitterAuthProvider = new TwitterAuthProvider()
const githubAuthProvider = new GithubAuthProvider()

export { db, auth, googleAuthProvider, facebookAuthProvider, twitterAuthProvider, githubAuthProvider }

// export default firebase
