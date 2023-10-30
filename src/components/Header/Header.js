import React from 'react'

import img_logotype from '../../assets/images/logotype.svg'
import Button from '../Generics/Button'

import './Header.css'


const Header = () => {
    return (
        <header>
            <section className="nav-section">
                <div className="container">
                    <a href="index.html"><img src={img_logotype} className='logotype' alt="crito logotype" /></a>
                    <button className="menu-bars"><i className="fa-solid fa-bars"></i></button>
                    <div className="menu">
                        <div className="top-menu">
                            <div className="contact-information">
                                <div className="content-box">
                                    <i className="fa-regular fa-phone-volume"></i>
                                    +46 (8) 121 470 50
                                </div>
                                <div className="content-box">
                                    <i className="fa-regular fa-envelope"></i>
                                    info@crito.com
                                </div>
                                <div className="content-box last">
                                    <i className="fa-regular fa-location-dot"></i>
                                    Sveavägen 31, 111 34 STOCKHOLM
                                </div>
                            </div>
                            <div className="social-media">
                                <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                                <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                                <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="main-menu">
                            <nav>
                                <a className="active" href="index.html">Home</a>
                                <a href="services.html">Service</a>
                                <a href="news.html">News</a>
                                <a href="contact.html">Contact</a>
                            </nav>
                            <Button text="Login" url="login" />
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header