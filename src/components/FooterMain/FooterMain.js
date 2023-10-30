import React from 'react'
import './FooterMain.css'

const FooterMain = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <span>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</span>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}

export default FooterMain