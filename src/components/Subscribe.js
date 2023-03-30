import React from 'react'

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <h3 className='intro'>Subscribe To Our Club</h3>
      <div style={{backgroundColor: 'whitesmoke'}}>
        <p>Subscribe to code warriors coding club and get updates on club events, tech job openings and club Hackertons </p>
        <div className='subscribe-container'>
          <form className='sub-child'>
            <input type='text' placeholder='Subscribe With Email'/>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Subscribe