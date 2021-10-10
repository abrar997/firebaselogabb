import React from "react";
import { getAuth } from "@firebase/auth";
const auth = getAuth();

const Home = ({user}) => { 
  const SignOut=()=>{
      auth.signOut()
  }
  
    return (
      <div>
        <h1>Home</h1>
        <p> hello {user.email} </p>
        <button onClick={() => SignOut()}>Sign out </button>
      </div>
    );
};

export default Home;
