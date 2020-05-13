import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import "./sign-in-and-sign-up.style.scss";
import Signup from "../../components/sign-up/signup-component";
const SignInAndSignUpPage = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <Signup />
  </div>
);

export default SignInAndSignUpPage;
