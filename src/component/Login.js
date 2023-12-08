import React, { useState } from "react";
import "./Login.css";
import SignInScreen from "./SignInScreen";
function Login() {
  const [signIn, setSignIn] = useState(false);
  const [email,setEmail]= useState("");
  function getStartedHandler(event) {
    setSignIn(true);
  }
  function emailHandler(event){
    setEmail(event.target.value);

  }
  function signInHandler(){
    setSignIn(true);
  }
  return (
    <div className="loginScreen">
      <div className="loginScreen-background">
        {/*<img src='https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg'/>
         */}
        <img
          className="loginScreen-Logo"
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
          alt="netflix-logo"
        ></img>
        <button onClick={signInHandler} className="loginScreen-Button">Sign In</button>
        <div className="loginScreen-Gradient" />
      </div>
      <div className="loginScreen-Body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <div>
            <h1>Ultimate films, Tv programs and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen-Input">
              <form>
                <input onChange={emailHandler} type="email" placeholder="Email Address"></input>
              </form>
              <button
                onClick={getStartedHandler}
                className="loginScreen-GetStarted"
              >
                GET STARTED
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
