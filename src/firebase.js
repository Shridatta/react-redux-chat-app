import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyD7t-r2voEzj64xyUe2Mc1yZi4hlCLNRjI",
  authDomain: "react-redux-chat-app-c6fb8.firebaseapp.com",
  databaseURL: "https://react-redux-chat-app-c6fb8.firebaseio.com",
  projectId: "react-redux-chat-app-c6fb8",
  storageBucket: "react-redux-chat-app-c6fb8.appspot.com",
  messagingSenderId: "398570975971"
};
firebase.initializeApp(config);

export default firebase;
