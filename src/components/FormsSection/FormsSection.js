import React from 'react'
import './FormsSection.css'

const FormsSection = () => {
  return (
    <section className="messages">
    <div className="container">
        <h2>Leave us a message for any information.</h2>
        <form>
            <input type="text" name="name" required placeholder="Name*" />
            <input type="text" name="email" required placeholder="Email*" />
            <textarea name="message" cols="30" rows="10" placeholder="Your Message*"></textarea>
        </form>
        <a className="btn-yellow btn-login" href="#">Send Message<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
    </section>
  )
}

export default FormsSection