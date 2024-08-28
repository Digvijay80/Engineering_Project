import React from 'react'
import { IoArrowForwardCircle } from "react-icons/io5";
import './Menubar.css';
const Midlevel = () => {
  return (
    <>
    <div className='mid'>
    <a href='https://mrengineeringservices.in/services.html' ><IoArrowForwardCircle hover-color='orange'/>Our-Services</a>
    <a href='https://mrengineeringservices.in/about-us.html' ><IoArrowForwardCircle/>About Us</a>
    <a href='https://mrengineeringservices.in/expertise.html' ><IoArrowForwardCircle/>Our-Expertise</a>
    <a href='https://mrengineeringservices.in/clientele.html' ><IoArrowForwardCircle/>Customer-Portfolio</a><br></br>
    <br></br><br></br><br></br>
   
</div>
<div>
        <h1 className='services'>SERVICES</h1>
        </div>
</>
  )
}

export default Midlevel
