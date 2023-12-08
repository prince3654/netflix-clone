import React from 'react';
import Nav from "./Nav";
import "./Profile.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';
import { auth } from '../firebase';
import PlansScreen from './PlansScreen';


function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className='profile'>
      {/* <h1>This is the profile screen </h1> */}
      <Nav/>
      <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen_info'>
          <img
          src='https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png'
          alt='profile-icon'
          ></img>
          <div className='profileScreen_detail'>

            <h2>{user.email}</h2>
            <h3>Plans</h3>
            <PlansScreen/>
            <div className='profileScreen_plans'>

              <button onClick={()=>
                auth.signOut()
              } className='profileScreen_signOut'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
