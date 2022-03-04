import React from 'react';
import './Home.css'
import img1 from './Home Images/salesicon.svg'
import img2 from './Home Images/transfericon.svg'
import { Link } from "react-router-dom"

function Home() {
  return (
      <div className='bg-container'>
          <div className='cards-container'>
              <Link to='/salesorder' style={{textDecoration:"none"}}>
                <div className='home-card1'>
                    <img className='image-1' src={img1} alt="logo"/>
                    <p className='order-text'>SALES ORDER</p>
                </div>
              </Link>
              <Link to = '/transfer' style={{textDecoration:"none"}}>
              <div className='home-card2'>
                <img className='image-2' src={img2} alt="logo"/>
                <p className='order-text'>TRANSFER ORDER</p>
              </div>
              </Link>
          </div>
          
      </div> 
  );
}

export default Home;
