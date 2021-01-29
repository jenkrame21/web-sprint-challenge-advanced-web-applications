import React, { useEffect, useState } from "react";
import axiosWithAuth from '../helpers/axiosWithAuth';
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const loginCredentials = {
    username: "",
    password: ""
  }

  const [login, setLogin] = useState(loginCredentials);
  const { push } = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value
    });
  };
  
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const onSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', login)
      .then((res) => {
        // Server receives data
        // console.log("Success Post Login:", res.data.payload);
        // Client receives data
        localStorage.setItem('token', res.data.payload);
        push('/protected');
      })
      .catch((err) => {
        console.log("Error Post Login:", err.message);
      });
  };

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
//[x] - 1. Build a form containing a username and password field.
//[x] - 2. Add whatever state necessary for form functioning.
//[x] - 3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//[x] - 4. If either the username or password is not displayed EXACTLY the following words: Username or Password not valid.
//[x] - 5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.