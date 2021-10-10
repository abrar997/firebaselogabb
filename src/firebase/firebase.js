import firebase from "firebase/compat/app";
// FIRST STEP IN AUTHENTICATION 
// SECOND STEP CCREATE LOG IN,SIGNUP,REGISTER.....COMPONENTS
// CONNECT THESE PAGES WITH HOME PAGE BY REGUSTER OR BY ROUTER LINK PUT IN LOG IN AND SIGN UP 
// USE SPECIAL DATA IN APP TO CONNECT THESE DATA WUTH HOME AND BY DOC OF FIREBASE AUTHENTICATION U WILL FOLLOW STEPS AND EVERY THING WILL WORK 
// الصفحة الرءيسية اللي انقل بيهة الداتة من 
// firebase 
const firebaseConfig = ({
  apiKey: "AIzaSyA1-hTkYHuga0EqAtvk4_m6BzMkzzH8FX4",
  authDomain: "newproj-adbea.firebaseapp.com",
  databaseURL: "https://newproj-adbea-default-rtdb.firebaseio.com",
  projectId: "newproj-adbea",
  storageBucket: "newproj-adbea.appspot.com",
  messagingSenderId: "563488162191",
  appId: "1:563488162191:web:b2d01f32aa8dcd435ccbfa",
});

// Initialize Firebase

// استدعي uthentication 
// واربطة مع الداتا اللي من
// firebase  by using const

// export const auth=app.auth;
const app = firebase.initializeApp(firebaseConfig);

export default app;

