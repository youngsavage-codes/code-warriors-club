import React from 'react'
import img from './img/land.jpg'
import indeed from './img/indead.jpg'

const LandingPage = () => {
  return (
  <div className='landing'>

    <div className='landing-text'>
          <h3>Learning to <br/> code can be <br/> easy and fun!</h3>
      <div className='words'>
          <h5>Would Give More Stars If I Could</h5>
          <p>mimo has been one of the best clubs to start your coding journey</p> 
          <span>Founded: 10/10/2022</span>    
      </div>

    </div>

    <div className='landing-img'> 
        <img src={img} alt='logo' className='pc'/>
        <img src={indeed} alt='logo' className='phone'/>
    </div>
  </div>
  )
}

export default LandingPage