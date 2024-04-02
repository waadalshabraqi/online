import React from 'react'
import '../styles/MyNavbar.css'
import logo from  '../../assets/Img/logo.png'


export default function MyNavbar() {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>ONLINE SHOP</p>
            
         </div>
         
           
      
    </div>
  )
}
