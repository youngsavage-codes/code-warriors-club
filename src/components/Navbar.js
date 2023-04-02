import React from 'react'

// Icon
import { BsList } from "react-icons/bs";

// Components
import { Link } from 'react-router-dom';

const Navbar = () => {
  const ul = document.querySelector('#links')

  const Toggle = (e) => {
    e.preventDefault()
    if(!ul.classList.contains('active'))
    {
      ul.classList.add('active')
    }
    else
    {ul.classList.remove('active')}
  }

  return (
    <div className='nav'>
       <div className='header'>
          <div className='logo'>
               <Link to='/' style={{textDecoration: 'none'}}> <h2>code~warriors</h2> </Link>
          </div>
          <ul id='links'>
             <li><Link to='/about'>About</Link></li>
             <li><Link to='/contact'>Contact</Link></li>
             <li><Link to='/team'>Team</Link></li>
             <li><Link to='/review'>Review</Link></li>
          </ul>
       </div>

       <div className='links'>
       <button onClick={Toggle}><BsList /></button>
         <Link>more</Link>

       </div>
    </div>
  )
}

export default Navbar