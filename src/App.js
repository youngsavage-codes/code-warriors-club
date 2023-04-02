import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

// Routes
import Home from './routes/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App