import React, { useState } from 'react'
import './contact-screen.scss'


const ContactScreen = ({pageRefs}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [info, setInfo] = useState('')

  const onSubmit = (evt) => {
    evt.preventDefault();
    alert(`Name: ${name}\n Email: ${email}\n Info: ${info}`)
  }

  return (
    <section id="contact" className="contact-section" ref={el => pageRefs.current = { ...pageRefs.current, contact: el }}>
        <div className="container">
          <div className="section-header">
            Contact
          </div>
          <form onSubmit={onSubmit} className="contact-form-flex">
            <div className="flex-row">
              <input 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email (optional)"
              />
            </div>
            <textarea
              type="text"
              value={info}
              onChange={e => setInfo(e.target.value)}
              placeholder="Additional Info (please include preferred way to contact you)"
            />
            <input type="submit" value="Submit" className="btn submit-btn"/>
          </form>
        </div>
    </section>
  )
}

export default ContactScreen