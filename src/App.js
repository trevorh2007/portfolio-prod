import React, { useRef, useEffect } from 'react'
import './App.scss'
import LandingScreen from './components/landing-screen/landing-screen'
import NavBar from './components/nav-bar/nav-bar'
import ProjectsScreen from './components/projects-screen/projects-screen'
import ContactScreen from './components/contact-screen/contact-screen'
import Footer from './components/footer/footer'

const App = () => {
  const pageRefs = useRef({})

  return(
    <div className="app">
      <NavBar pageRefs={pageRefs}/>
      <LandingScreen pageRefs={pageRefs}/>
      <ProjectsScreen pageRefs={pageRefs}/>
      <ContactScreen pageRefs={pageRefs}/>
      <Footer />
    </div>
  )
}

export default App