import React from 'react'
import './about-screen.scss'
import profilePic from '../../assets/images/profile-pic.jpg'

const AboutScreen = ({pageRefs}) => {
    return (
      <section id="about" ref={el => pageRefs.current = { ...pageRefs.current, about: el }} className="about-section">
        <div className="container">
            <div className="section-header">
                About
                <div className="section-header-bar" />
            </div>
            <div className="flex-row">
                <div className="portrait">
                    <img src={profilePic} alt="trevor howard"/>
                </div>
                <div className="elevator-pitch">
                    Hi, my name is Trevor. I have 3 years of professional developing experience with a focus on the
                    React, Node, and Postgresql tech stack. I have worked in primarily small teams, both in office
                    and remote.
                </div>
            </div>
        </div>
      </section>
    )
  }
  
  export default AboutScreen