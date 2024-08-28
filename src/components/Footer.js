import React from 'react'
import './Footer.css';
import { MdWorkHistory } from "react-icons/md";
import { PiBatteryVerticalHighFill } from "react-icons/pi";
import { FcServices } from "react-icons/fc";
const footer = () => {
  return (
    <>
    <div className='container'>
      <p className='ptag'>MR Engineering Services</p>
      <pre className='pretag' >
        <h1>Excellent Tailor made</h1>
        <h1>Services at all the</h1>
        <h1>Times.</h1>
      </pre>
    
    <div className='series'>
    <div>
    <MdWorkHistory font-size='50px' /><br></br>
        <h2 >Workmanship</h2><br></br>
        <pre><h5>We Take great pride </h5>
        <h5>in everything that we </h5>
         <h5>do in our Company.</h5></pre>
    </div>
    <div>
        <PiBatteryVerticalHighFill font-size='50px'/><br></br>
        <h2>High Performance</h2><br></br>
        <pre><h5>Recognized as one of </h5>
         <h5>best Engineering & Manpower </h5>
          <h5>Services firms</h5></pre>
    </div>
    <div>
        <FcServices font-size='50px'/><br></br>
        <h2>Excellent Services</h2><br></br>
        <pre><h5>Top Notch Engineering</h5> 
        <h5>Services ,AMC &</h5>
         <h5>Refurbishment Services</h5></pre>
    </div>
    </div>
    <div className='footerbtn'>
      <button className='btn3'>View Our Services</button>
      <button className='btn4'>Write To Us</button>
    </div>
    </div>
    
    </>
  )
}

export default footer;
