import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var config = {
  apiKey: 'AIzaSyDGC3I5DWeRo9MdgYWVN7B06TXzfr1WynY',
  authDomain: 'soccer1100-d17fc.firebaseapp.com',
  databaseURL: 'https://soccer1100-d17fc.firebaseio.com',
  projectId: 'soccer1100-d17fc',
  storageBucket: 'soccer1100-d17fc.appspot.com',
  messagingSenderId: '420123239882',
  appId: '1:420123239882:web:6f760deeba52d855'
}

firebase.initializeApp(config)

const firebaseDB = firebase.database()
const firebaseMatches = firebaseDB.ref('matches')
const firebasePromotions = firebaseDB.ref('promotions')

// firebaseDB.ref("matches").once("value").then((snapshot)=>{
//   console.log(snapshot.val())
// })

export { firebase, firebaseMatches, firebasePromotions }
