import React from "react";
import "./detail.css";

const Detail = () => {
  return( 
  <div class="detail">
  <div class="users">
  <img src="./n3.jpeg" alt="" />
  <h2>Vaishnavi</h2>
  <p>"Be yourself."</p>
  </div>

  <div class="info">
  <div class="option">
  <div class="title">
    <span>Chat Setting</span>
  <img src="./arrowUp.png" alt="" />
  </div>
  </div> 
  <div class="option">
  <div class="title">
    <span>Shared Photos</span>
    <img src="./arrowDown.png" alt="" />
  </div>
  <div class="photo">
    <div class="photoItem">
      <div class="photoDetail">
        <img src="./im1.jpeg" alt="" />
        <span>photo_2024_2.png</span>
      </div>
      <img src="./download.png" alt="" class="download" />
    </div>
    <div class="photoItem">
      <div class="photoDetail">
        <img src="./im2.jpeg" alt="" />
        <span>photo_2024_2.png</span>
      </div>
      <img src="./download.png" alt="" class="download"/>
    </div>
  <div class="photoItem">
  <div class="photoDetail">
  <img src="./im3.jpeg" alt="" />
  <span>photo_2024_2.png</span>
</div>
  
  <img src="./download.png" alt=""  class="download"/>

  </div>
  <div class="photoItem">
  <div class="photoDetail">
  <img src="./im4.jpeg" alt="" />
  <span>photo_2024_2.png</span>
</div>
  
  <img src="./download.png" alt="" class="download"/>

  </div>
  <div class="photoItem">
  <div class="photoDetail">
  <img src="./im6.jpeg" alt="" />
  <span>photo_2024_2.png</span>
</div>
  
  <img src="./download.png" alt="" class="download" />

  </div>
  <div class="photoItem">
  <div class="photoDetail">
  <img src="./im7.jpeg" alt="" />
  <span>photo_2024_2.png</span>
</div>
  
  <img src="./download.png" alt="" class="download"/>

  </div>

  </div>
  </div>
   <div class="option">
  <div class="title">
    <span>Shared Files</span>
  <img src="./arrowUp.png" alt="" />
  </div>
  </div>
  
  </div>
  <button class="userbutton">Block User</button>
  <button class="Logout">Logout</button>
  
  </div>
  
  )
};

export default Detail;
