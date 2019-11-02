import React from 'react';
import nav from  '../navbar.css';




const navbar = ()=> {

return (

<div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      Boston Maids
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <a href="#" target="_blank">Book Now</a>
    <a href="#" target="_blank"></a>
    <a href="#" target="_blank">LinkedIn</a>
    
  </div>
</div>



)

};


export default navbar;