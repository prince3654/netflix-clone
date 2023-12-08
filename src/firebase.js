import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import {auth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCqHgVmrui2nkGRdA2FuYDTjs-EhLDZ3SI",
    authDomain: "netflix-clone-c0a8f.firebaseapp.com",
    projectId: "netflix-clone-c0a8f",
    storageBucket: "netflix-clone-c0a8f.appspot.com",
    messagingSenderId: "482107249578",
    appId: "1:482107249578:web:4519a52786112e2ec191d3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {auth};
  export default db;