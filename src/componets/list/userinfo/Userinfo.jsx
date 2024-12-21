import React from "react";
import "./userinfo.css";

const Userinfo = () => {
  return( 
    <div className="userinfo">
      <div className="user">
        <img src="./n3.jpeg" alt="" />
        <h2>Vaishnavi</h2>
      </div>
      <div className="icons">
        
        <img src="./edit.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./more5.png" alt="" />
      </div>
    </div>
  );
}

export default Userinfo;
