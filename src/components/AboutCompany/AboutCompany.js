import React from 'react';
import './AboutCompany.css';
import SectionTitle from '../Generics/SectionTitle';
import Button from '../Generics/Button';
import { Link } from 'react-router-dom'

import image_founder from '../../assets/images/image-founder.svg'

const AboutCompany = () => {
  return (
    <section className="about-company">
    <div className="container">
        <div className="parent">
            <img className="founder" src={image_founder} alt="Founder of Crito" />
            <div className="founderquotes">
                <p>
                    <strong>Samantha Brown, </strong>
                    <span>Founder</span>
                    <br />
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                </p>
            </div>
        </div>
        <div className="text-section">
        <SectionTitle subtitle="About Company" title="We Are Business Consulting & Credit Repair Experts" />
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda
                    esse
                    obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci
                    accusantium libero provident voluptate amet.</p>
            </div>
            <div className="center-content">
                <Button className="btn-black" text="Learn More" url="services/learn-more" />
                <div className="video-button">
                    <Link className="btn-round"><i className="fa-solid fa-play"></i></Link>
                    <p className="intro-video">Intro Video</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutCompany