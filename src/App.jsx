import React from 'react'
import './App.css'
import { Companies, Courses, Hero, Navbar } from './components'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Companies/>
      <Courses/>
    </div>
  )
}

export default App