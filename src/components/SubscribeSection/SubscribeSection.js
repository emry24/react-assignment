import React from 'react';
import './SubscribeSection.css';
import Button from '../Generics/Button';
import element_subscribe from '../../assets/images/element-subscribe.svg'


const SubscribeSection = () => {
    return (
        <section className="subscribe">
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                <input type="email" required placeholder="username@domain.com" />
                <div className="center-content">
                <Button className="btn-yellow" text="Subscribe" url="/consulting" />
                </div>
            </div>
            <img className='element-subscribe' src={element_subscribe} />
        </section>
    )
}

export default SubscribeSection