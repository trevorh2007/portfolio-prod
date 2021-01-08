import React from 'react'
import './about-screen.scss'

const AboutScreen = ({pageRefs}) => {
    return (
      <section id="about" ref={el => pageRefs.current = { ...pageRefs.current, about: el }} className="about-section">
        <h1>About Section</h1>
      </section>
    )
  }
  
  export default AboutScreen