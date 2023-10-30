import React from 'react'
import './ArticleAndNews.css'

import white_dots from '../../assets/images/dots-white.svg'
import image1 from '../../assets/images/article-image1.png'
import image2 from '../../assets/images/article-image2.png'
import image3 from '../../assets/images/article-image3.png'

const ArticleAndNews = () => {
  return (
    <section class="article-and-news">
    <div class="container">
        <div class="section-title">
            <div>
                <p>Article & News</p>
                <h2>Get Every Single Article & News</h2>
            </div>
            <div class="browse-button">
                <a class="btn-transparent" href="news.html">Browse Articles<i
                        class="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
        <div class="articles">
            <a href="article.html">
                <div class="image-box">
                    <img src={image1} alt="woman with curly hair in a blue blazer" />
                    <div class="yellow-box">
                        <h3>25</h3>
                        <p>Mar</p>
                    </div>
                </div>
                <p>Business</p>
                <h3>How To Use Digitalization In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </a>
            <a href="#">
                <div class="image-box">
                    <img src={image2} alt="screen-image from a website" />
                    <div class="yellow-box">
                        <h3>17</h3>
                        <p>Mar</p>
                    </div>
                </div>
                <p>Business</p>
                <h3>How To Implement Chat GPT In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </a>
            <a href="#">
                <div class="image-box">
                    <img src={image3} alt="books featuring css and javascript" />
                    <div class="yellow-box">
                        <h3>13</h3>
                        <p>Mar</p>
                    </div>
                </div>
                <p>Business</p>
                <h3>The Guide To Support Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </a>
        </div>
        <div class="center-content">
            <img src={white_dots} alt="five black and gray dots on a white background" />
        </div>
    </div>
</section>
  )
}

export default ArticleAndNews