import React from 'react'
import './ProjectAndCase.css'

import img_article1 from '../../assets/images/article-image-1.png'
import img_article2 from '../../assets/images/article-image-2.png'
import img_article3 from '../../assets/images/article-image-3.png'
import img_article4 from '../../assets/images/article-image-4.png'

const ProjectAndCase = () => {
    return (
        <div>
            <section class="project-and-case">
                <div class="container">
                    <div class="section-title">
                        <p>Project & Case Studies</p>
                        <h2>Let's Looks Our Global Projects</h2>
                    </div>
                    <div class="project-and-cases">
                        <a class="project" href="#">
                            <img src={img_article1} alt="A mans hand reading a business paper" />
                                <h3>Grow your business</h3>
                                <div class="readmore">Read More<i class="fa-regular fa-arrow-up-right"></i></div>
                        </a>
                        <a class="project" href="#">
                            <img src={img_article2} alt="Pink Apple products" />
                                <h3>Why your client needs a responsive website</h3>
                                <div class="readmore">Read More<i class="fa-regular fa-arrow-up-right"></i></div>
                        </a>
                        <a class="project" href="#">
                            <img src={img_article3} alt="Desk with supplies" />
                                <h3>Educate your employees to get better results</h3>
                                <div class="readmore">Read More<i class="fa-regular fa-arrow-up-right"></i></div>
                        </a>
                        <a class="project" href="#">
                            <img src={img_article4} alt="Laptop with Business Intellegence Insights" />
                                <h3>Business Insights is a important piece of your business</h3>
                                <div class="readmore">Read More<i class="fa-regular fa-arrow-up-right"></i></div>
                        </a>
                    </div>
                    <div class="center-content">
                        <a class="btn-black" href="projects.html">All Recent Projects<i
                            class="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectAndCase