import React from 'react';
import './ArticleAndNews.css';
import Button from '../Generics/Button';
import { Link } from 'react-router-dom';

import white_dots from '../../assets/images/dots-white.svg';
import image1 from '../../assets/images/article-image1.png';
import image2 from '../../assets/images/article-image2.png';
import image3 from '../../assets/images/article-image3.png';

const ArticleAndNews = () => {
  return (
    <section className="article-and-news">
    <div className="container">
        <div className="section-title">
            <div>
                <p>Article & News</p>
                <h2>Get Every Single Article & News</h2>
            </div>
            <div className="browse-button">
            <Button className="btn-transparent" text="Browse Articles" url="/news" />
            </div>
        </div>
        <div className="articles">
            <Link to="/article">
                <div className="image-box">
                    <img src={image1} alt="woman with curly hair in a blue blazer" />
                    <div className="yellow-box">
                        <h3>25</h3>
                        <p>Mar</p>
                    </div>
                </div>
                <p>Business</p>
                <h3>How To Use Digitalization In The classNameroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </Link>
            <Link to="#">
                <div className="image-box">
                    <img src={image2} alt="screen-image from a website" />
                    <div className="yellow-box">
                        <h3>17</h3>
                        <p>Mar</p>
                    </div>
                </div>
                <p>Business</p>
                <h3>How To Implement Chat GPT In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </Link>
            <Link to="#">
                <div className="image-box">
                    <img src={image3} alt="books featuring css and javascript" />
                    <div className="yellow-box">
                        <h3>13</h3>
                        <p>Mar</p>
                    </div>
                </div>
                <p>Business</p>
                <h3>The Guide To Support Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </Link>
        </div>
        <div className="center-content">
            <img src={white_dots} alt="five black and gray dots on a white background" />
        </div>
    </div>
</section>
  )
}

export default ArticleAndNews