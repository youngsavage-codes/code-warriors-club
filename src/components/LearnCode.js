import React from 'react'
import andriod from './img/andriod.png'
import andriod1 from './img/andriod1.jpg'
import languages from './img/languages.png'

const Learncode = () => {
  return (
    <div className='learn'>
      <h3 className='intro'>Learn to code on the go</h3>

      <div className='main-learn'>
        <div className='mini-learn'>
          <div className='child'>
            <div className='img-field'>
              <img src={andriod} alt=''/>
            </div>
            <h4><span></span> Bite-size excercises</h4>
            <p>Complete bite-sized exercises with real code and immediate feedback</p>
          </div>

          <div className='child'>
            <div className='img-field'>
              <img src={andriod1} alt=''/>
            </div>
            <h4><span></span> Code Playground</h4>     
            <p>Experiment with examples, write and run cose, and save your projects</p>
          </div>

          <div className='child'>
            <div className='img-field'>
              <img src={languages} alt=''/>
            </div>
              <h4><span></span> Streaks</h4>
              <p>Set a daily goal and maintain a streak to make a habit of coding</p>
          </div>              
        </div>

      </div>
    </div>
  )
}

export default Learncode