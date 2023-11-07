import React, { useState } from 'react'
import './FormsSection.css'

const FormsSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [errorMessage, setErrorMessage] = useState('')
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    const message = {name, email}
    const json = JSON.stringify(message)

    const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: json
    })

    clearForm()

    switch (result.status) {
      case 200: 
        clearForm()
        alert('Meddelandet har skickats')
        break
      case 400:
          setErrorMessage('Något gick fel. Kontrollera att fälten är ifyllda korrekt')   
          break
    }

  }

  const clearForm = () => {
    name('')
    email('')
  }


  return (
    <section className="messages">
    <div className="container">
        <h2>Leave us a message for any information.</h2>
        <p className='errorMessage'>{errorMessage}</p>
        <form onSubmit={handleSubmit} noValidate>
            <input type="text" required placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" required placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea cols="30" rows="10" placeholder="Your Message*"></textarea>
        </form>
        <button className="btn-yellow btn-login" type="submit">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
    </div>
    </section>
  )
}

export default FormsSection