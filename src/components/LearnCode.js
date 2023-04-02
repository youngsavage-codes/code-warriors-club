import React from 'react'

const Learncode = () => {
  return (
    <div className='learn'>
      <h3 className='intro'>Learn to code on the go</h3>

      <div className='main-learn'>
        <div className='mini-learn'>
          <div className='child'>
            <div className='img-field'>
              <img src='https://mimo.org/static/48223d5db2b930022c58d60899be151e/cf66c/bite-sized.webp' alt=''/>
            </div>
            <h4><span></span> Bite-size excercises</h4>
            <p>Complete bite-sized exercises with real code and immediate feedback</p>
          </div>

          <div className='child'>
            <div className='img-field'>
              <img src='https://mimo.org/static/ac924e178e712c3adccd7ee9712adaab/cf66c/playground.webp' alt=''/>
            </div>
            <h4><span></span> Code Playground</h4>     
            <p>Experiment with examples, write and run cose, and save your projects</p>
          </div>

          <div className='child'>
            <div className='img-field'>
              <img src='https://mimo.org/static/6ecb59a55b41fd8e14d2b5463cd1e5e2/cf66c/streaks.webp' alt=''/>
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