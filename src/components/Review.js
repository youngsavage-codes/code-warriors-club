import React from 'react'
import img from './img/img.jpg'

const Review = () => {
  return (
    <div className='reviews'>
       <h3 className='intro'>Our Reviews</h3>
        <div className='review-container'>
          <div className='sponsors'>
            <div style={{}} className='sponsors-header'>
              <div className='header-cover'>
                <h2>Featured Stories</h2>
              </div>
            </div>
            <div className='sponsors-logo'>
              <div className='main'>
              <img src={img} alt='' />
               <img src={img} alt='' />
               <img src={img} alt='' />
               <img src={img} alt='' />
              </div>
            </div>
          </div>
          <div className='review-text'>
              <div>
                <p>
                  I attended the training in may and i must say it is one of the best decisions i have made
                    i went hungery to learn and i am glad it paid off as i now knw how to build games and webpages
                </p>
              </div>
              <div className='reviewer-details'>
                <img src={img} alt='reviewerimage' />
                <div >
                  <h5>Courage Olaniyi</h5>
                  <span>5 Years Old</span>
                </div>
              </div>
          </div>
       </div>
    </div>
  )
}

export default Review