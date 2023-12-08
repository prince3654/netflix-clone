import React from "react";
import "./SignInScreen.css";
import { useRef } from "react";
import {auth} from "../firebase";
function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef =useRef(null);

  function signInHandler(event) {
    event.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{

      console.log(authUser);
    }).catch(error=>{
      alert(error.message);
    })
  }
  function registerHandler(event) {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{

      console.log(authUser);
    }).catch(error=>{
      alert(error.message);
    })

  }
  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email"></input>
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signInHandler}>
          Sign In
        </button>
        <h4>
          <span className="signInScreen-Gray">New to Netflix?</span>
          <span className="signInScreen-Link" onClick={registerHandler}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
