import React from 'react'
import './landing-screen.scss'

const LandingScreen = () => {
  return (
    <section id="landing" className="landing-section">
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