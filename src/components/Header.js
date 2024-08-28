import React from 'react';
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import './Header.css';
const header = () => {
    return(
        <>
        <header className='header1'>

        <nav className='navbar'>
         
         <IoMdCall/> Phone:(+91)-9533123456, 8523123456
        <MdEmail/> Email:rk@mrengineeringservices.in
        
          <a href="contact.asp">ViewSitemap</a>
          <a href="https://www.facebook.com/profile.php?id=100051411896230"><FaFacebookF/></a>
          <a href="www.linkdin.com"><FaLinkedin /></a>
          <a href="www.twitter.com"><FaSquareXTwitter/></a>
          
        </nav>
        </header>
        
        </>
    )
}
export default header;