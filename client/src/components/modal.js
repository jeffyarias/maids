import React from 'react';
import './modal.css';

const modal = (props)=> {
   
return (
   
<div id="modal3" className="modal3">
<h1 id="modalHeader3">Booking Details</h1>
<p>Bedrooms {props.bedrooms}</p>
<p>Bathrooms {props.bathrooms} </p>
<p>Carpet</p>
<p>Price ${props.totalPrice}</p>
 </div>

);





}
export default modal;