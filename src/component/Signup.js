import React, { useCallback, useRef } from "react";
import app from "../firebase/firebase";
// import { auth } from '../firebase/firebase';
import "firebase/compat/auth";
import "./style.css";
import { Link } from "react-router-dom";
import {GoogleAuthProvider}from 'firebase/auth'

const provider= new GoogleAuthProvider();
const auth = app.auth(); // use app to connect login and signup data with fireabse 





const Signup = () => {
  // handle submit function containe
  // e.preventDefault to stop running page with click button befor function work and then page can run
  // take data from inout email and passsword
  // connect this data with authebtication firabase to tran the data to firebase projsct (firebase project is acontainer of users data)
  // createUserWithEmailAndPassword :ready from firebase doc use to selsect the way that u waant to work on it and connect it by (inputs )

  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const SignWithEmail = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    await auth
      .createUserWithEmailAndPassword(
        email.value,
        password.value,
      )
   
      .then((res) => {
        return "login is sucssesful";
      })
      .catch((error) => {
        alert(error);
      });
  }
  , []);
  //  if(password.current.value!==confirmPassword.current.value){
  //        try(() => {
  //     })catch(() => {
  
  //     });
  //    }

  const SignUpWithGoogle=()=>{
    auth.signInWithPopup(provider)
    .then(()=>{  //nevr forger res u will have beauty error stp your work when you click on button 
      alert('signed with google ')
    })
    .catch((error)=>{
      alert("some thing wrong ,please try again later ")
    })
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1> sign up </h1>
          {/* noraml form */}
          <form onSubmit={SignWithEmail}>
     
            <label>Email</label>
            <input type="email" name="email" ref={email} />

            <label> password </label>

            <input type="password" name="password" ref={password} />

            <label> confirm password </label>

            <input type="password" name="password" ref={confirmPassword} />
            <button type="submit">sign up </button>
            <p style={{ color: "white" }}>
              hello world ? <Link to="/Login">log in </Link>
            </p>
          </form>

          <button
            type="button"
            className="w-50 secondary"
            onClick={SignUpWithGoogle}
          >
            google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
