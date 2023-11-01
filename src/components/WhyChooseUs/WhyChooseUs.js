import React from 'react';
import './WhyChooseUs.css';
import SectionTitle from '../Generics/SectionTitle';
import BoxItem2 from '../Generics/BoxItem';

import icon_thumbsup from '../../assets/images/icon-thumbs-up.svg';
import icon_ellipse from '../../assets/images/icon-ellipse.svg';
import icon_designpen from '../../assets/images/icon-designpen.svg';
import icon_ai from '../../assets/images/icon-artificial-intellegence.svg';
import image_meeting from '../../assets/images/image-meeting.svg';
import background_image_meeting from '../../assets/images/background-image-meeting.svg';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
    <div className="container">
        <div className="main-box">
        <SectionTitle subtitle="Why Choose Us" title="Why We Are The Best Business Consulting Agency" />
            <div className="icons-box">
                <div className="box-item">
                    <div>
                        <img className="icon-image" src={icon_thumbsup} alt="A thumbs up icon" />
                    </div>
                    <div>
                        <h3>Process Excellence</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="box-item">
                    <div>
                        <img className="icon-image" src={icon_ellipse} alt="An ellipse icon" />
                    </div>
                    <div>
                        <h3>Strategic Planning</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="box-item">
                    <div>
                        <img className="icon-image" src={icon_designpen} alt="A designpen icon" />
                    </div>
                    <div>
                        <h3>Experience Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="box-item">
                    <div>
                        <img className="icon-image" src={icon_ai}
                            alt="An intellegence icon" />
                    </div>
                    <div>
                        <h3>Artificial Intelegence</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="parent">
            <img className="image-meeting" src={image_meeting}
                alt="Two women with an Ipad having a meeting " />
            <img className="image-background" src={background_image_meeting} alt="" />
        </div>
    </div>
</section>
  )
}

export default WhyChooseUs