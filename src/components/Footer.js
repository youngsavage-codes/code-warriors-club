import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-child'>
         <div className='footer-flex'>
            <div className='logo'>
               <h2 style={{color: 'white'}}>code~warriors</h2>
            </div>
            <div className='ul-grid'>
               <ul>
                  <h5>Product</h5>
                  <li><a href='/'>Web Dev</a></li>
                  <li><a href='/'>App Dev</a></li>
                  <li><a href='/'>Graphic Design</a></li>
               </ul>

               <ul>
                  <h5>Company</h5>
                  <li><a href='/'>About us</a></li>
                  <li><a href='/'>Contact</a></li>
                  <li><a href='/'>Gallery</a></li>
               </ul>

               <ul>
                  <h5>Follow us</h5>
                  <li><a href='/'><span></span> Facebook</a></li>
                  <li><a href='/'><span></span> Twitter</a></li>
                  <li><a href='/'><span></span> Instagram</a></li>
                  <li><a href='/'><span></span> Github</a></li>
               </ul>
            </div>
         </div>
      </div>
      <span className='copyrights'> <p>@ Code warriors</p></span>
    </div>
  )
}

export default Footer