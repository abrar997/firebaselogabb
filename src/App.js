// download npm install --save @stripe/react-stripe-js @stripe/stripe-js to gecollect online paymentst
//react-router-dom react-hook-form


import React, { useEffect, useState } from "react";
import app from "../src/firebase/firebase"
// import { getAuth } from "firebase/auth";


import Home from "./component/Home";
import Register from "./component/Register";

const auth = app.auth();
const user = auth.currentUser;


function App() {

  // 1-USEEFFECT INSTEAD componentDidMount  TO DO SOMETHING(FUNCTION )
  // 2-user to make firebase ideentify if this user do login or signup befor time 
  // 3-return home with condition call if the use is make login befor time let him login to home without making signup and we use here register bcz this componnet contain login and signup components connect with them by react-router-dom

  const [user, setUser] = useState(null);
  useEffect((user) => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return <div>
    {user ? <Home  user={user}/> : <Register />}

    </div>;
}

export default App;
