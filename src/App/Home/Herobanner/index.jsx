import React from 'react'
import './Herobanner.scss'
import heroimg1 from '../../../Assets/Images/hero-bg-img.jpg'
import heroimg2 from '../../../Assets/Images/hero-bg-img-2.jpg'

export default function Herobanner() {
  return (
    <div className='Herobanner'>
      <div className="Container">
     <div className="flex-side">
         <div className="hero-texts">
              <h6>WELCOME TO CERAMIC SHOP</h6>
              <h1>Elevate Your<br/> Space With Ceramic Elegance.</h1>
              <h2>Starting from just $149.00</h2>
              <button className='button-shop-now'><span>SHOP NOW</span></button>
         </div>

         <div className="hero-img">
            <div className="hero-img-1">
              <img src={heroimg1}/>
            </div>
            <div className="hero-img-2">
              <img src={heroimg2}/>
            </div>
         </div>
 

     </div>
     </div>
    </div>
  )
}
