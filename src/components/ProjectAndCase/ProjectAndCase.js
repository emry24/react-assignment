import React from 'react';
import './ProjectAndCase.css';
import { Link } from 'react-router-dom';
import Button from '../Generics/Button'

import img_article1 from '../../assets/images/article-image-1.png'
import img_article2 from '../../assets/images/article-image-2.png'
import img_article3 from '../../assets/images/article-image-3.png'
import img_article4 from '../../assets/images/article-image-4.png'

const ProjectAndCase = () => {
    return (
        <div>
            <section className="project-and-case">
                <div className="container">
                    <div className="section-title">
                        <p>Project & Case Studies</p>
                        <h2>Let's Looks Our Global Projects</h2>
                    </div>
                    <div className="project-and-cases">
                        <Link className="project" to="#">
                            <img src={img_article1} alt="A mans hand reading a business paper" />
                                <h3>Grow your business</h3>
                                <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                        </Link>
                        <Link className="project" to="#">
                            <img src={img_article2} alt="Pink Apple products" />
                                <h3>Why your client needs a responsive website</h3>
                                <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                        </Link>
                        <Link className="project" to="#">
                            <img src={img_article3} alt="Desk with supplies" />
                                <h3>Educate your employees to get better results</h3>
                                <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                        </Link>
                        <Link className="project" to="#">
                            <img src={img_article4} alt="Laptop with Business Intellegence Insights" />
                                <h3>Business Insights is a important piece of your business</h3>
                                <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                        </Link>
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