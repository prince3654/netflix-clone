import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  function scrollHandler(event) {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  const navigateHome=()=>{
    navigate('/');
  }

  const navigateProfile = ()=>{
    navigate('/profile');
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <div className={`nav ${show && "nav-Black"}`}>
      {/*show and nav-lack are in condition if show true then whole expression
  true and can be used to display navbar in black else no back color*/}
      <div className="nav-Content">
        <img
          onClick={navigateHome}
          className="netflix-Logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix"
        ></img>

        <img
          onClick={navigateProfile}
          className="nav-Avatar"
          src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
