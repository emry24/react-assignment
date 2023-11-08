import React, { useState } from 'react'
import './FormsSection.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormsSection = () => {
  const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  const [errorMessage, setErrorMessage] = useState('')
  
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },

    validationSchema: Yup.object ({
      name: Yup.string()
        .required("Du måste ange ett namn")
        .min(2, "Namnet måste bestå av minst 2 tecken"),
      email: Yup.string()
        .required("Du måste ange en e-postadress")
        .matches(emailRegex, "Du måste ange en giltig e-postadress"),
      message: Yup.string()
        .required("Du måste ange ett meddelande")
        .min(15, "Meddelandet måste innehålla minst 15 karaktärer")
    }),

    onSubmit: async (values, {resetForm}) => {
      const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      switch (result.status) {
        case 200:
          resetForm()
          alert('Meddelandet har skickats.')
          break;
        case 400:
          setErrorMessage('Något gick fel. Kontrollera att fälten är korrekt ifyllda.') 
          break;
      }
    }
  })

  return (
    <section className="messages">
    <div className="container">
        <h2>Leave us a message for any information.</h2>
        
        <form onSubmit={form.handleSubmit} noValidate>
            <p className='errorMessage'>{errorMessage}</p>
            <label className={form.errors.name && form.touched.name ? 'error' : ''}>{form.errors.name ? form.errors.name : ''}</label>
            <input type="text" placeholder="Name*" name="name" value={form.values.name} onChange={form.handleChange} />
            <label className={form.errors.email && form.touched.email ? 'error' : ''}>{form.errors.email ? form.errors.email : ''}</label>
            <input type="text" placeholder="Email*" name="email" value={form.values.email} onChange={form.handleChange} />
            <label className={form.errors.message && form.touched.message ? 'error' : ''}>{form.errors.message ? form.errors.message : ''}</label>
            <textarea cols="30" rows="10" placeholder="Your Message*" name="message" value={form.values.message} onChange={form.handleChange}></textarea>
            <button className="btn-yellow btn-login" type="submit">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
        </form>
        
    </div>
    </section>
  )
}

export default FormsSection