import React from 'react'

// Components
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import Learncode from '../components/LearnCode'
import About from '../components/About'
import Subscribe from '../components/Subscribe'
import Review from '../components/Review'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
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