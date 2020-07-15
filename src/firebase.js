import firebase from 'firebase'

const firebaseApp = firebase.initializeApp (
    {
        apiKey: "AIzaSyBFNvSQTkF_dGrlh5Bodwj9vwMVnl60yUo",
        authDomain: "facebook-messenger-clon.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clon.firebaseio.com",
        projectId: "facebook-messenger-clon",
        storageBucket: "facebook-messenger-clon.appspot.com",
        messagingSenderId: "461934541665",
        appId: "1:461934541665:web:81688f8ce4ce8870ba6320",
        measurementId: "G-G1GWK9Y7MQ"
      }
)

  const db = firebaseApp.firestore();

  export default db