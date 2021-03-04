import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCSTkdrt_XsaoU2lGcJSsk5Ykclqj50EKE",
    authDomain: "askme-c0418.firebaseapp.com",
    projectId: "askme-c0418",
    storageBucket: "askme-c0418.appspot.com",
    messagingSenderId: "340724067143",
    appId: "1:340724067143:web:10ed2eb2f2d1ae7448ba62",
    measurementId: "G-GNMBKLSTCT"
  };
    const firebaseapp = firebase.initializeApp(firebaseConfig)
    const auth = firebase.auth()
    const provider = new firebase.auth.GoogleAuthProvider()
    const db = firebaseapp.firestore()
    export{auth,provider}
    export default db