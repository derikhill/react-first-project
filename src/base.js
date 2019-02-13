import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDhl1-IPXcGgLxc_7RZFhlr9cKTOWIJSqo",
    authDomain: "catch-of-the-day-derik.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-derik.firebaseio.com"
  });

  const base = Rebase.createClass(firebaseApp.database());

  export {firebaseApp};

  export default base;