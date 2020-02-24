import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC64Xv3gYR9czsd6BpEICqFXXJVV2-htVw',
  authDomain: 'list-n-run.firebaseapp.com',
  databaseURL: 'https://list-n-run.firebaseio.com',
  projectId: 'list-n-run',
  storageBucket: 'list-n-run.appspot.com',
  messagingSenderId: '6457042373',
  appId: '1:6457042373:web:ee1863519dbe571b8e57ac',
  measurementId: 'G-WZQ4HQHR8P'
}

firebase.initializeApp(config)

export default firebase
