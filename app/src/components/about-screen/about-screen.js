import React from 'react'
import './about-screen.scss'
import profilePic from '../../assets/images/profile-pic.jpg'

const AboutScreen = ({pageRefs}) => {
    return (
      <section id="about" ref={el => pageRefs.current = { ...pageRefs.current, about: el }} className="about-section">
        <div className="container">
            <div className="section-header">
                About
            </div>
            <div className="flex-row">
                <div className="portrait">
                    <img src={profilePic} alt="trevor howard"/>
                </div>
                <div className="elevator-pitch">
                    Hi, my name is Trevor. After attending and completing an accelerated learning program, I've spent
                    the last 3 years building professional experience as a software developer. I've successfully
                    managed end-to-end projects and have generated a strong professional network for my colleagues.
                    I've always been passionate about the way developers bring cultures together and what we can all
                    learn from each other. I would love the opportunity to bring my abilities to any company that share
                    the same values.
                </div>
            </div>
        </div>
      </section>
    )
  }
  
  export default AboutScreen