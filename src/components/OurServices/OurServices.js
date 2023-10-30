import React from 'react';
import './OurServices.css';
import ServiceBox from '../Generics/ServiceBox';
import SectionTitle from '../Generics/SectionTitle';
import Button from '../Generics/Button';



const OurServices = () => {
  return (
    <section className="our-services">
        <img className="element-services" src="images/element-services.svg" alt="" />
            <div className="container">
                <SectionTitle subtitle="Our Services" title="We Provide The Best Service For Consulting" />
                <div className="box-section">

                    <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/businessadvice"/>
                    <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startupbusiness"/>
                    <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/financialadvice"/>
                    <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/riskmanagement"/>
                    
                </div>
                <div className="center-content">
                    <Button className="btn-transparent" text="Browse Services" url="/services"/>
                </div>
            </div>
        </section>
  )
}

export default OurServices