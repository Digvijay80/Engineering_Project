import React from 'react'
import './Menubar.css';
import { IoArrowForwardCircle } from "react-icons/io5";
export default function home() {
  return (
    <>
    <div className='home'>
    <br></br><br></br><h1><a href='/' >Welcome To</a></h1><br></br><br></br>
      <br></br><br></br>
      <h1>MR Engineering Services</h1><br></br><br></br><br></br>
      <pre>TextFree is a mobile application and web service that allows users to send </pre><br></br>
      <pre>and receive text messages, as well as make and receive VoIP phone calls, </pre><br></br>
      <pre>for free over the internet. The service costs nothing because it is supported by ads, 
      </pre><br></br>
      <p>Let's Go # Independent With MR Engineering Services</p><br></br><br></br>
      <div className='btn'>
      <button className='btn1'><h3><IoArrowForwardCircle color='red'/>Learn About Us!</h3></button>
      <button className='btn2'><h3>View Our Services</h3></button>
        
     
      </div>
    </div>
    <div>
          <button className='fixbtn'>Get In Touch</button>
          </div>
    </>
  )
}
