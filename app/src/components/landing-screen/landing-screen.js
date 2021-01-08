import React from 'react'
import './landing-screen.scss'

const LandingScreen = ({pageRefs}) => {
  return (
    <section id="home" className="landing-section" ref={el => pageRefs.current = { ...pageRefs.current, home: el }}>
      <div className="landing-flex">
        <div className="landing-text">
          <div className="flex-row">
            Hello, I'm&nbsp;
            <span>Trevor Howard</span>
          </div>
          <div className="flex-row">
            I'm passionate about creating
            <br />
            and maintaining elegant applications
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingScreen