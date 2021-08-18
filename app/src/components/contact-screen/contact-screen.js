import React, { useState } from 'react'
import './contact-screen.scss'


const ContactScreen = ({pageRefs}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState(true)
  const [info, setInfo] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const onSubmit = (evt) => {
    evt.preventDefault();

    var disableSubmit = document.getElementsByClassName('submit-btn')[0]
    var loadingIcon = document.getElementById('loading').classList

    disableSubmit.disabled = true
    loadingIcon.add('lds-hourglass')


    const requestOptions = {
      mode: 'cors',
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email, info: info})
    }
    fetch('http://localhost:3080/contact', requestOptions)
      .then(response => {
        if (response.status === 200) {
          setName('')
          setEmail('')
          setInfo('')
          setEmailSent(true)
        } else {
          setEmailError(true)
        }
        disableSubmit.disabled = false
        loadingIcon.remove('lds-hourglass')
      })
  }

  const handleEmail = (evt) => {
    const email = evt.target.value
    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
    setEmail(email)
    emailRegex.test(email) || email === '' ? setEmailValid(true) : setEmailValid(false)
  }

  return (
    <section id="contact" className="contact-section" ref={el => pageRefs.current = { ...pageRefs.current, contact: el }}>
        <div className="container">
          <div className="section-header">
            Contact
          </div>
          {emailError && (
            <h4>Something went wrong sending the email, please wait a moment and try again.</h4>
          )}
          {!emailSent && (
            <form onSubmit={onSubmit} className="contact-form-flex">
              <div className="flex-row">
                <input 
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Name"
                />
                <div className="email-flex-column">
                  <input
                    type="text"
                    value={email}
                    onChange={e => handleEmail(e)}
                    placeholder="Email"
                  />
                  {!emailValid && (
                    <div className="email-invalid">Please enter your email address, or leave this field blank.</div>
                  )}
                </div>
              </div>
              <textarea
                type="text"
                value={info}
                onChange={e => setInfo(e.target.value)}
                placeholder="Additional Info (please include preferred way to contact you)"
              />
              <input type="submit" value="Submit" className="btn submit-btn" disabled={!emailValid}/>
              <div id="loading" />
            </form>
          )}
          {emailSent && (
            <h3>Thank you for reaching out! I will be in contact with you shortly!</h3>
          )}
        </div>
    </section>
  )
}

export default ContactScreen