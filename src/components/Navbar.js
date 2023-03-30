import React from 'react'

const Navbar = () => {
  return (
    <div className='nav'>
       <div className='header'>
          <div className='logo'>
               <h2>mimo</h2>
          </div>
          <ul>
             <li><a href='/'>About us</a></li>
             <li><a href='/'>Contact</a></li>
             <li><a href='/'>Gallery</a></li>
          </ul>
       </div>

       <div className='links'>
         <a href='/'>More</a>
       </div>
    </div>
  )
}

export default Navbar