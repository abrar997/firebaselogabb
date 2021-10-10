import React from 'react'
import { BrowserRouter as Router ,Switch,Route,NavLink } from 'react-router-dom' 
import Login from './Login'
import Signup from './Signup';
const Register = () => {
    
    // connect log in and Signup in one pages maybe u don't need this page 
    return (
      <>
        <Router>
          {/* forget to="/" */}
          <NavLink to="/Login">Log in </NavLink>
          <NavLink to="/Signup">Sign up </NavLink>

        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
        </Switch>
        </Router>
 </> 
    );
}

export default Register
