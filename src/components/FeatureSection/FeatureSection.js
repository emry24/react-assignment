import React from 'react'
import './FeatureSection.css';
import Button from '../Generics/Button';
import SectionTitle from '../Generics/SectionTitle';
import BoxItem from '../Generics/BoxItem';


import icon_hands from '../../assets/images/icon-hands.svg'
import icon_lightboulb from '../../assets/images/icon-lightboulb.svg'
import icon_charts from '../../assets/images/icon-charts.svg'
import icon_engineringbox from '../../assets/images/icon-engineringbox.svg'

const FeatureSection = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="features-box">
                    <SectionTitle subtitle="Features" title="Our Accounting Is Trusted By Thousand Of Companies"/>
                    <div className="center-content">
                        <Button className="btn-yellow" text="Learn More" url="/services/learn-more" />
                    </div>
                </div>
                <div className="grid-box">
                    <BoxItem className="box-item" src={icon_hands} alt="Shaking hand icon" title="Business Advice" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                    <BoxItem className="box-item" src={icon_lightboulb} alt="Lightboulb icon" title="Startup Business" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                    <BoxItem className="box-item" src={icon_charts} alt="Statistics icon" title="Financial Advice" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                    <BoxItem className="box-item" src={icon_engineringbox} alt="Engineringbox icon" title="Risk Management" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                </div>
            </div>
        </section>

    )
}

export default FeatureSection