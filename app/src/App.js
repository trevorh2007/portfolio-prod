import React, { useRef, useEffect } from 'react'
import './App.scss'
import LandingScreen from './components/landing-screen/landing-screen'
import AboutScreen from './components/about-screen/about-screen'
import NavBar from './components/nav-bar/nav-bar'
import ProjectsScreen from './components/projects-screen/projects-screen'
import ContactScreen from './components/contact-screen/contact-screen'

const App = () => {
  const pageRefs = useRef({})

  useEffect(() => {
    document.title = "Trevor Howard"
  }, [])

  return(
    <div className="app">
      <NavBar pageRefs={pageRefs}/>
      <LandingScreen pageRefs={pageRefs}/>
      <AboutScreen pageRefs={pageRefs}/>
      <ProjectsScreen pageRefs={pageRefs}/>
      <ContactScreen pageRefs={pageRefs}/>
    </div>
  )
}

export default App