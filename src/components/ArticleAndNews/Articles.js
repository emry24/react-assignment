import { useEffect, useState } from 'react'
import React from 'react'
import './Articles.css'
import {Link} from 'react-router-dom'
import scroll_numbers from '../../assets/images/numbers-scrolling.svg'

const Articles = () => {

    const [articles, setArticles] = useState([])
    
    useEffect(() => {
      getArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        
        if (result.status === 200)
            setArticles(await result.json())
    }

    const formatDate = (dateString) => {
        const date = new Date (dateString)
        const day = date.getDate().toString().padStart(2, '0')
        const month = date.toLocaleString('default', { month: 'short' })
        return { day, month }
    }

    return (
        <section className='article-and-news'>
            <div className='container'>
                <h2>Our News & Articles</h2>
                <div className='articles'>
                {
                    articles.map(article => (
                        <Link className="article-item" key={article.id} to={`/news/${article.id}`}>
                            <div className='image-box'>
                                <img className="article-image" src={article.imageUrl} alt={article.title} />
                                <div className='yellow-box'>
                                    <h3>{formatDate(article.published).day}</h3>
                                    <p>{formatDate(article.published).month}</p>
                                </div>
                            </div>
                            <p>{article.category}</p>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                        </Link>
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