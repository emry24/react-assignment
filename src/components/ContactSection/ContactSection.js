import React from 'react'
import './ContactSection.css'

const ContactSection = () => {
  return (
    <div className="contact">
    <div className="container">
        <div className="contact-box">
            <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
            </div>
            <b>Visit us</b>
            <p>Sveavägen 31</p>
            <p>111 34 STOCKHOLM</p>
        </div>
        <div className="contact-box">
            <div className="icon">
                <i className="fa-solid fa-phone-volume"></i>
            </div>
            <b>Call us</b>
            <p>+46 (8) 121 470 50</p>
            <p>+46 (8) 121 470 51</p>
        </div>
        <div className="contact-box">
            <div className="icon">
                <i className="fa-solid fa-envelope"></i>
            </div>
            <b>Email us</b>
            <p>info@crito.com</p>
            <p>support@crito.com</p>
        </div>
    </div>
</div>
  )
}

export default ContactSection