import React from 'react'
import './App.scss'
import LandingScreen from './components/landing-screen/landing-screen'
import AboutScreen from './components/about-screen/about-screen'
import NavBar from './components/nav-bar/nav-bar'

const App = () => {
  return(
    <div>
      <NavBar />
      <LandingScreen />
      <AboutScreen />
    </div>
  )
}

export default App