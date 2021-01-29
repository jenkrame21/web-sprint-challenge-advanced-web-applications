import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const loginCredentials = {
    username: "",
    password: ""
  }

  const [login, setLogin] = useState(loginCredentials);

  const handleChange = e => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value
    });
  };

  const onSubmit = () => {

  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={onSubmit}>
        <label>Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          value={login.username}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={login.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.