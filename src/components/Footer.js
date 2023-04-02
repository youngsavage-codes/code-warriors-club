import React from 'react'
import { Link } from 'react-router-dom';
import { BsGithub, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

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
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                  <li><Link to='/services'>Services</Link></li>
                  <li><Link to='/team'>Team</Link></li>
               </ul>

               <ul className='social'>
                  <h5>Follow us</h5>
                  <li><a href='/'><span><BsFacebook /></span> Facebook</a></li>
                  <li><a href='/'><span><BsTwitter /></span> Twitter</a></li>
                  <li><a href='/'><span><BsInstagram /></span> Instagram</a></li>
                  <li><a href='/'><span><BsGithub /></span> Github</a></li>
               </ul>
            </div>
         </div>
      </div>
      <span className='copyrights'> <p>@ Code warriors</p></span>
    </div>
  )
}

export default Footer