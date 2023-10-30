import React from 'react'
import './AboutCompany.css'

import image_founder from '../../assets/images/image-founder.svg'

const AboutCompany = () => {
  return (
    <section className="about-company">
    <div className="container">
        <div className="parent">
            <img className="founder" src={image_founder} alt="Founder of Crito" />
            <div className="founderquotes">
                <p>
                    <strong>Samantha Brown,</strong>
                    <span>Founder</span>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                </p>
            </div>
        </div>
        <div className="text-section">
            <div className="section-title">
                <p>About Company</p>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
            </div>
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda
                    esse
                    obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci
                    accusantium libero provident voluptate amet.</p>
            </div>
            <div className="center-content">
                <a className="btn-black" href="consulting.html">Learn More<i
                        className="fa-regular fa-arrow-up-right"></i></a>
                <div className="video-button">
                    <a className="btn-round"><i className="fa-solid fa-play"></i></a>
                    <p className="intro-video">Intro Video</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutCompany