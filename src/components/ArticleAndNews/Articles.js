import { useEffect, useState } from 'react'
import React from 'react'
import './Articles.css'

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
        <section className='news-and-articles'>
            <div className='container'>
                {
                    articles.map(article => (
                        <div className="article-item" key={article.id}>
                            <img className="article-image" src={article.imageUrl} alt={article.title} />
                            <p>{article.category}</p>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Articles