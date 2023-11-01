import React from 'react';
import './ProjectAndCase.css';
import SectionTitle from '../Generics/SectionTitle';
import Button from '../Generics/Button';
import ProjectBox from './ProjectBox'

import img_article1 from '../../assets/images/article-image-1.png'
import img_article2 from '../../assets/images/article-image-2.png'
import img_article3 from '../../assets/images/article-image-3.png'
import img_article4 from '../../assets/images/article-image-4.png'

const ProjectAndCase = () => {
    return (
        <div>
            <section className="project-and-case">
                <div className="container">
                <SectionTitle subtitle="Project & Case Studies" title="Let's Looks Our Global Projects" />
                    <div className="project-and-cases">
                        <ProjectBox src={img_article1} alt="A mans hand reading a business paper" text="Grow your business"/>
                        <ProjectBox src={img_article2} alt="Pink Apple products" text="Why your client needs a responsive website"/>
                        <ProjectBox src={img_article3} alt="Desk with supplies" text="Educate your employees to get better results"/>
                        <ProjectBox src={img_article4} alt="Laptop with Business Intellegence Insights" text="Business Insights is a important piece of your business"/>
                    </div>
                    <div className="center-content">
                        <Button className="btn-black" text="All Recent Projects" url="/procejts" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectAndCase