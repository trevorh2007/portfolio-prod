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
                    My name is Trevor Howard and I've been focused over the last 2 years developing
                    software since September of '18. After my first full time job in the industry (a start up), I've
                    spent the last 2 years at a relatively small healthcare focused company, creating and maintaining a wide range
                    of applications. I am most interested in working for company that priortizes . I'm looking for
                    opportunities that are focused on providing elegant solutions to everyday problems.
                </div>
            </div>
        </div>
      </section>
    )
  }
  
  export default AboutScreen