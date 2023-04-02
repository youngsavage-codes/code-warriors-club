import React from 'react'
import img from './img/4401280.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='About'>
      <h3 className='intro'>About us</h3>
      <div className='About-Container'>

        <div className='parent'>
            <div className='about-img'>
              <img src={img} alt='' />
            </div>
            <div className='about-txt'>
              <h2>Code Warriors Coding Club</h2>
              <p>
                At Mimo, we believe that coding can open doors to opportunities like few other skills. That's why we've rallied around the purpose of making coding accessible to as many people as possible,<br/><br/>
                At our club we make your coding journey easy and fun. With our professional tutors, practical projects and our annual inter-club hackertons
              </p>
              <span className='date'>Founded: 10/10/2022</span> <br/><br/>
                <div className='clubs-details'>
                    <div className='num'>
                      <h6>Subscribers</h6> 
                      <span>0</span>
                    </div>
                    <div className='num'>
                      <h6>Members</h6>
                      <span>0</span>
                    </div>
                    <div className='num'>
                      <h6>Participants</h6>
                      <span>0</span>
                    </div>
                </div>
                  <Link to='/about'>Learn More</Link>
             </div>
        </div>
      </div>
    </div>
  )
}

export default About