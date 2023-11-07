import React, { useState } from 'react'
import './FormsSection.css'
import { useFormik } from 'formik'

const FormsSection = () => {
  const [errorMessage, setErrorMessage] = useState('')
  
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },

    onSubmit: async (values) => {
      const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      switch (result.status) {
        case 200:
          alert('Meddelandet har skickats.')
          break;
        case 400:
          setErrorMessage('Något gick fel. Kontrollera att fälten är korrekt ifyllda.') 
          break;
      }
    }
  })

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setErrorMessage('')

  //   const textMessage = {name, email, message}
  //   const json = JSON.stringify(textMessage)

  //   const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
  //     method: 'post',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: json
  //   })

  //   clearForm()

  //   switch (result.status) {
  //     case 200: 
  //       clearForm()
  //       alert('Meddelandet har skickats.')
  //       break
  //     case 400:
  //         setErrorMessage('Något gick fel. Kontrollera att fälten är korrekt ifyllda.')   
  //         break
  //   }

  // }

  // const clearForm = () => {
  //   setName('')
  //   setEmail('')
  //   setMessage('')
  // }


  return (
    <section className="messages">
    <div className="container">
        <h2>Leave us a message for any information.</h2>
        
        <form onSubmit={form.handleSubmit} noValidate>
            <p className='errorMessage'>{errorMessage}</p>
            <input type="text" required placeholder="Name*" name="name" value={form.values.name} onChange={form.handleChange} />
            <input type="text" required placeholder="Email*" name="email" value={form.values.email} onChange={form.handleChange} />
            <textarea cols="30" rows="10" placeholder="Your Message*" name="message" value={form.values.message} onChange={form.handleChange}></textarea>
            <button className="btn-yellow btn-login" type="submit">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
        </form>
        
    </div>
    </section>
  )
}

export default FormsSection