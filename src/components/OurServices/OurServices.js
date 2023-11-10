import React from 'react';
import './OurServices.css';
import ServiceBox from '../Generics/ServiceBox';
import SectionTitle from '../Generics/SectionTitle';
import Button from '../Generics/Button';
import element_services from '../../assets/images/element-services.svg'


const OurServices = () => {
    return (
        <section className="our-services">
            <div className="container">
                <SectionTitle subtitle="Our Services" title="We Provide The Best Service For Consulting" />
                <div className="box-section">

                    <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/businessadvice" />
                    <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/startupbusiness" />
                    <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/financialadvice" />
                    <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/services/riskmanagement" />

                </div>
                <div className="center-content">
                    <Button className="btn-transparent" text="Browse Services" url="/services" />
                </div>
            </div>
            <img className="element-services" src={element_services} alt="" />
        </section>
    )
}

export default OurServices