import React from 'react'
import { useArticles } from '../../contexts/ArticleContext'
import { Link } from 'react-router-dom'
import './ArticlesSmall.css'

const ArticlesSmall = () => {
const { articles } = useArticles()

    const formatDates = (dateString) => {
        const date = new Date(dateString)
        const day = date.getDate().toString().padStart(2, '0')
        const month = date.toLocaleString('default', { month: 'short' })
        return { day, month }
    }

  return (
    <section className='article-and-news'>
        <div className='container'>
            <div className='articles'>
        {
            articles.slice(0, 3).map(article => (
                <Link className='article-item' key={article.id} to={`/news/${article.id}`}>

                            <div className='image-box'>
                                <img className="article-image" src={article.imageUrl} alt={article.title} />
                                <div className='yellow-box'>
                                    <h3>{formatDates(article.published).day}</h3>
                                    <p>{formatDates(article.published).month}</p>
                                </div>
                            </div>

                    <p>{article.category}</p>
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                </Link>
            ))
        }
        </div>
        </div>
    </section>
  )
}

export default ArticlesSmall