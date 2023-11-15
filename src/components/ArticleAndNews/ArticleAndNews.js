import React from 'react';
import './ArticleAndNews.css';
import Button from '../Generics/Button';
import SectionTitle from '../Generics/SectionTitle';
import { Link } from 'react-router-dom';

import white_dots from '../../assets/images/dots-white.svg';
import image1 from '../../assets/images/article-image1.png';
import image2 from '../../assets/images/article-image2.png';
import image3 from '../../assets/images/article-image3.png';
import ArticlesSmall from '../ArticlesSmall/ArticlesSmall';

const ArticleAndNews = () => {
    return (
        <section className="article-and-news">
            <div className="container">
                <div className='header'>
                <SectionTitle className="section-title" subtitle="Article & News" title="Get Every Single Article & News" />
                    <div className="browse-button">
                        <Button className="btn-transparent" text="Browse Articles" url="/news" />
                    </div>
                </div>

                <ArticlesSmall />
                <div className="center-content">
                    <img src={white_dots} alt="five black and gray dots on a white background" />
                </div>
                
            </div>
            
        </section>
    )
}

export default ArticleAndNews