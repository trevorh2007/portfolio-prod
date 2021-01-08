import React from 'react'
import './contact-screen.scss'

const ContactScreen = ({pageRefs}) => {
  return (
    <section id="contact" className="contact-section" ref={el => pageRefs.current = { ...pageRefs.current, contact: el }}>
        Contact Section
    </section>
  )
}

export default ContactScreen