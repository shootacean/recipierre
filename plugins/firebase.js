import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyD2ow8uevh0hQ5LY3ikSafpdlAuBpM8J_k',
    authDomain: 'recipierre-8b9c3.firebaseapp.com',
    databaseURL: 'https://recipierre-8b9c3.firebaseio.com',
    projectId: 'recipierre-8b9c3',
    storageBucket: 'recipierre-8b9c3.appspot.com',
    messagingSenderId: '596084733565',
    appId: '1:596084733565:web:78ba078e53fc59f4'
  })
}

export default firebase
