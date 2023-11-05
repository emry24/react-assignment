import { useEffect, useState } from 'react'
import React from 'react'
import './Articles.css'
import scroll_numbers from '../../assets/images/numbers-scrolling.svg'

const Articles = () => {

    const [articles, setArticles] = useState([])
    
    useEffect(() => {
      getArticles()
    }, [])

    const getArticles = async () => {

        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        setArticles(await result.json())
  
    }

    return (
        <section className='article-and-news'>
            <div className='container'>
                <h2>Our News & Articles</h2>
                <div className='articles'>
                {
                    articles.map(article => (
                        <div className="article-item" key={article.id}>
                            <div className='image-box'>
                                <img className="article-image" src={article.imageUrl} alt={article.title} />
                                <div className='yellow-box'>
                                    <h3>date</h3>
                                    <p>month</p>
                                </div>
                            </div>
                            <p>{article.category}</p>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                        </div>
                    ))
                }
                </div>
                <div className="center-content">
                    <img src={scroll_numbers} alt="Scrolling between pages" />
                </div>
            </div>
        </section>
    )
}

export default Articles