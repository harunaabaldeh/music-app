import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCHz5AcStg5qRaMvDT_Xr3VDImoytw5KRU',
  authDomain: 'music-33ef6.firebaseapp.com',
  projectId: 'music-33ef6',
  storageBucket: 'music-33ef6.appspot.com',
  appId: '1:660963291100:web:f093aabca855751fb0a919'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
