import React from 'react';
import './Getintouch.css';
import { IoMdCall } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { TbArrowForward } from "react-icons/tb";
const Getintouch = () => {
  return (
    <>
    <div className='getintouch'>
    <div className='star1'>
    <h1><FaStar/></h1>
    <h1><FaStar/></h1>
    <h1><FaStar/></h1>
    <h1><FaStar/></h1>
    <h1><FaStar/></h1>
    </div>
    <div className='leftcontent'>
    <h2>MR Engineering Services</h2><br></br>
    <h2><IoMdCall/>  <FaPlus fontSize='15px'/>919676432134</h2>
    <h2><IoMdCall/>  <FaPlus fontSize='15px'/>919676432134</h2>
    <h2><IoMdCall/>  <FaPlus fontSize='15px'/>919676432134</h2><br></br>

    <h3>Email;-digvijaykumar54@gmail.com</h3>
    <h4><TbArrowForward  font-size='20px'/>Address:-Flat No. 101, </h4>
    <h4>Sai Silpa Enclave,Mahakalinagar,</h4> 
    <h4>Shamshiguda, Kukatpally,</h4>
     <h3>Hyderabad</h3>
    </div>
    <div className='signup'>
    <h1>Get In Touch</h1><br></br>
    <h2>Let's Talk About Your Project...</h2>
    <form>
    <h2>Name</h2>
      <input className='entry' type='text' placeholder='Name'/><br></br>
      <h2>Email</h2>
      <input className='entry' type='text' placeholder='Email'/><br></br>
      <h2>Phone Number</h2>
      <input className='entry' type='text' placeholder='Phone '/><br></br>
      <h2>Message</h2>
      <textarea className='entry' placeholder='Enter your message'/><br></br>
      
      <button className='submitbtn'>Submit Request</button>
    </form>

    </div>
    </div>
    </>
  )
}

export default Getintouch;
