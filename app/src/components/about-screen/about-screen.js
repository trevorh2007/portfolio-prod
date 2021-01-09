import React from 'react'
import './about-screen.scss'

const AboutScreen = ({pageRefs}) => {
    return (
      <section id="about" ref={el => pageRefs.current = { ...pageRefs.current, about: el }} className="about-section">
        About Section
      </section>
    )
  }
  
  export default AboutScreen