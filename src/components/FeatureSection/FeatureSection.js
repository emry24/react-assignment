import React from 'react'
import './FeatureSection.css'
import SectionTitle from '../Generics/SectionTitle';
import Button from '../Generics/Button';


import icon_hands from '../../assets/images/icon-hands.svg'
import icon_lightboulb from '../../assets/images/icon-lightboulb.svg'
import icon_charts from '../../assets/images/icon-charts.svg'
import icon_engineringbox from '../../assets/images/icon-engineringbox.svg'

const FeatureSection = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="features-box">
                    <SectionTitle subtitle="Features" title="Our Accounting Is Trusted By Thousand Of Companies" />
                    <div className="center-content">
                        <Button className="btn-yellow" text="Learn More" url="/services/learn-more" />
                    </div>
                </div>
                <div className="grid-box">
                    <div className="box-item">
                        <img src={icon_hands} alt="Shaking hand icon" />
                        <h3>Business Advice</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="box-item">
                        <img src={icon_lightboulb} alt="Lightboulb icon" />
                        <h3>Startup Business</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="box-item">
                        <img src={icon_charts} alt="Statistics icon" />
                        <h3>Financial Advice</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="box-item">
                        <img src={icon_engineringbox} alt="Engineringbox icon" />
                        <h3>Risk Management</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default FeatureSection