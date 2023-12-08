import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './component/HomeScreen';
import {
  Routes,
  Route
} from "react-router-dom";
import MainHeader from './component/MainHeader';
import About from './component/About';
import Login from './component/Login';
import { auth } from "./firebase"
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/user/userSlice';
import Profile from './component/Profile';
import Player from './component/Player';





function App() {
  const user = useSelector(selectUser);//before writing it its only o redux and firewall login but after this firewall kickedin and logeed in the user
  const dispatch = useDispatch();
  // The dispatch function is used to send actions to the Redux store,
  //  which in turn triggers state changes.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // logged In
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
        //  The dispatch function is used to send actions to the Redux store, which in turn triggers state changes.

        // console.log(userAuth);
      } else {
        // logged Out
        dispatch(logout());
        // The dispatch function is used to send actions to the Redux store, which in turn triggers state changes.
      }
      return unsubscribe;//to detch  old one and attach the  new one we use return which donot hamper the our overal all flow of code
      // this is like when login credential work is done then run return = ()=>{ unsubscribe()} thart is written as return unsuscribe
    });
  }, [dispatch])
  return (
    <div>

      {
        !user ? (<Login />) : 
        (
          <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path="/" element={<MainHeader />}>
              <Route index element={<HomeScreen />} />{/*This is your default route 
      ie agar koi route equal nahi hua then ye wala render hoga*/ }

              <Route path="/about" element={<About />} />
              <Route path='/player' element= {<Player/>}/>
 
              <Route
                path="*"
                element={
                  <div>
                    <h1>NOT FOUND 404 </h1>
                  </div>
                }
              />
            </Route>
          </Routes>)
      }



    </div>
  );
}

export default App;
