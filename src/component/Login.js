import React, { useCallback } from "react";
import app from "../firebase/firebase";
import "firebase/compat/auth";

import './style.css'
import {SignUpWithGoogle} from './Signup'
const auth = app.auth();

// 
const Login = () => {
  // handle submit function containe
  // e.preventDefault to stop running page with click button befor function work and then page can run
  // take data from inout email and passsword
  // connect this data with authebtication firabase to tran the data to firebase projsct (firebase project is acontainer of users data)
  // signInWithEmailAndPassword :ready from firebase doc use to selsect the way that u waant to work on it and connect it by (inputs )
  const LogWithEmail = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    await auth
      .signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        alert("Signup is sucssesful");
      })
      .catch((error) => {
        alert("password is wrong" );
      });
  }, []); // to run one time jsut when page loading 

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <h1> Log in </h1>
          {/* normal form  */}

          <form onSubmit={LogWithEmail}>
            <label>Email</label>
            <input type="email" name="email" />

            <label> password </label>

            <input type="password" name="password" />
            <button type="submit">sign up </button>
          </form>
          <button type="button" onClick={()=>{
            SignUpWithGoogle;
          }}>click</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
