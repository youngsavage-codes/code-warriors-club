import React from 'react'

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
               <h2>code~warriors</h2>
          </div>
          <ul id='links'>
             <li><a href='/'>About us</a></li>
             <li><a href='/'>Contact</a></li>
             <li><a href='/'>Gallery</a></li>
          </ul>
       </div>

       <div className='links'>
       <button onClick={Toggle}>+</button>
         <a href='/'>More</a>

       </div>
    </div>
  )
}

export default Navbar