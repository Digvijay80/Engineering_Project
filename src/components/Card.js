import React from 'react'
import './Card.css';
const card = () => {
  return (
    <>
    <section className='main-container'>
    <div className='card-container'>
      <img src="https://mrengineeringservices.in/img/one/3.jpg" 
      alt='cardImage'
       className='card-image'/>
      <h1 className='card-title'>Card Title</h1>
      <p className='card-description'>Card Description</p>
      <a href='card-page' className='cardpage'>View Services</a>
    </div>
    <div className='card-container'>
      <img src="https://mrengineeringservices.in/img/one/2.jpg" 
      alt='cardImage'
       className='card-image'/>
      <h1 className='card-title'>Card Title</h1>
      <p className='card-description'>Card Description</p>
      <a href='card-page' className='cardpage'>View Services</a>
    </div>
    <div className='card-container'>
      <img src="https://mrengineeringservices.in/img/one/4.jpg" 
      alt='cardImage'
       className='card-image'/>
      <h1 className='card-title'>Card Title</h1>
      <p className='card-description'>Card Description</p>
      <a href='card-page' className='cardpage'>View Services</a>
    </div>
    <div className='card-container'>
      <img src="https://mrengineeringservices.in/img/one/12.jpg" 
      alt='cardImage'
       className='card-image'/>
      <h1 className='card-title'>Card Title</h1>
      <p className='card-description'>Card Description</p>
      <a href='card-page' className='cardpage'>View Services</a>
    </div>
    <div className='card-container'>
      <img src="https://mrengineeringservices.in/img/one/19.jpg" 
      alt='cardImage'
       className='card-image'/>
      <h1 className='card-title'>Card Title</h1>
      <p className='card-description'>Card Description</p>
      <a href='card-page' className='cardpage'>View Services</a>
    </div>
    <div className='card-container'>
      <img src="https://mrengineeringservices.in/img/one/10.jpg" 
      alt='cardImage'
       className='card-image'/>
      <h1 className='card-title'>Card Title</h1>
      <p className='card-description'>Card Description</p>
      <a href='card-page' className='cardpage'>View Services</a>
    </div>
    </section>
    </>
  )
}

export default card;
