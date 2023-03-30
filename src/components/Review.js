import React from 'react'
import languages from './img/16xc_gyq5_210901.jpg'
import img from './img/img.jpg'
import first from './img/pquy_9o2w_220905.jpg'

const Review = () => {
  return (
    <div className='reviews'>
       <h3 className='intro'>Our Reviews</h3>
        <div className='review-container'>
           <div className='review-parent'>
             <div className='review-child'>
               <div className='review-img'>
                  <img src={first} alt=''/>
               </div>
               <h4>Samuel Collins</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, molestias! Obcaecati sit iure debitis accusantium.</p>
             </div>

             <div className='review-child'>
               <div className='review-img'>
                   <img src={img} alt=''/>
               </div>
               <h4>Code Warrior</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, molestias! Obcaecati sit iure debitis accusantium.</p>
             </div>

             <div className='review-child'> 
               <div className='review-img'>
                  <img src={languages} alt=''/>
               </div>
               <h4>Young Savage</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, molestias! Obcaecati sit iure debitis accusantium.</p>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Review