import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// import { seedDatabase } from '../seed';

const config ={
apiKey: "AIzaSyA4ERhBb1Of0sSUII1gYVseOafkRAubkp0",
  authDomain: "instagram-v2-36b4e.firebaseapp.com",
  projectId: "instagram-v2-36b4e",
  storageBucket: "instagram-v2-36b4e.appspot.com",
  messagingSenderId: "361547468731",
  appId: "1:361547468731:web:adf5c549c7d58459a17e9e"
}
firebase.default.initializeApp(config); 
const {FieldValue} = firebase.firestore;

// seedDatabase(firebase);


export {firebase, FieldValue};