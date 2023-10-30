import React from 'react'
import './SubscribeSection.css'


const SubscribeSection = () => {
    return (
        <section className="subscribe">
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                <input type="email" required placeholder="username@domain.com" />
                <div className="center-content">
                    <a className="btn-yellow" href="consulting.html">Subscribe<i
                        className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection