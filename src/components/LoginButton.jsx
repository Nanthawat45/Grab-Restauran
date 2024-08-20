import React from 'react'
import UserProfile from "./UserProfile";
//import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

const LoginButton = () => {
  return (
    <div>
      <a href="/login" className='btn btn-success'>Login</a>
    </div>
  );
}

export default LoginButton