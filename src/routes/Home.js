import React from 'react'

// Components
import LandingPage from '../components/LandingPage'
import Learncode from '../components/LearnCode'
import About from '../components/About'
import Subscribe from '../components/Subscribe'
import Review from '../components/Review'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <LandingPage />
      <Learncode />
      <About />
      <Subscribe />
      <Review />
      <Footer />
    </div>
  )
}

export default Home