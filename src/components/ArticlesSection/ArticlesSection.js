import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ArticlesSection.css'
import image_quotationmarks from '../../assets/images/image-quotationmarks.png'

const ArticlesSection = () => {
    const [article, setArticle] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getArticle()
    }, [])

    const getArticle = async () => {
        if (id !== undefined) {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

            if (result.status === 200)
                setArticle(await result.json())
        }
    }


    return article ?
        (
            <section className='articles'>
                <div className='container'>
                    <div className='article-classroom-digitalization'>
                        <h2 className='title'>{article.title}</h2>
                        <div className='article-ref'>
                            <p className='dot'>{article.published}</p>
                            <p className='dot'>{article.category}</p>
                            <p className='author'>{article.author}</p>
                        </div>
                        <img className="article-image" src={article.imageUrl} alt={article.title} />
                        <div className="article-text">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                                Fusce
                                posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna
                                eros quis urna.
                            </p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti exercitationem quos
                                officiis
                                nihil non, animi asperiores ea, eligendi illum ab iste accusamus et eaque nulla, possimus
                                necessitatibus placeat. Soluta, explicabo. Lorem, ipsum dolor sit amet consectetur
                                adipisicing
                                elit. Vero qui, fuga corporis quas perferendis quod amet dignissimos fugiat tenetur, veniam
                                eaque doloremque voluptas, aperiam culpa consequuntur temporibus dolores nam! Perferendis.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eveniet sequi, voluptate
                                sapiente, modi molestias cupiditate non repellendus ab in nobis minima placeat obcaecati
                                omnis.
                                Molestias dolores commodi adipisci deleniti. Lorem ipsum dolor sit amet consectetur
                                adipisicing
                                elit. Quis accusamus est obcaecati commodi repellat. Repudiandae accusantium consequatur
                                fugit
                                corrupti! A itaque quidem officia magnam voluptas consectetur facere soluta, maxime earum?
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga placeat, eaque ratione saepe
                                molestias culpa a? Totam, quos, distinctio reprehenderit fugiat nam numquam, repellat vero
                                autem
                                aperiam voluptatibus perferendis modi!
                            </p>
                            <div className='quote'>
                                <img src={image_quotationmarks} />
                                <p className='content'>{article.content}</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor laudantium, cumque sequi
                                temporibus odit placeat vitae, suscipit praesentium delectus eos, omnis eveniet sapiente
                                voluptas inventore repellendus. Culpa earum officia voluptate?
                            </p>
                        </div>
                        <div className="subjects">
                            <p>Digitalization</p>
                            <p>School</p>
                            <p>IT</p>
                            <p>Design</p>
                            <p>Work</p>
                            <p>Tech</p>
                        </div>
                    </div>
                    <div className="search-posts">
                        <form className="searchbox">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Type of search..." />
                        </form>
                        <div className="recent-posts">
                            <h3>Recent Posts</h3>
                            <a href="#">
                                <b>How To Blow Throught Capital At An Incredible Rate</b>
                                <p>Jan 14, 2020</p>
                            </a>
                            <a href="#">
                                <b>Design Studios That Everyone Should Know About?</b>
                                <p>Jan 14, 2020</p>
                            </a>
                            <a href="#">
                                <b>How did we get 1M+ visitors in 30 days without anything!</b>
                                <p>Jan 14, 2020</p>
                            </a>
                            <a href="#">
                                <b>Figma On Digma: How We Built Our Website Design System</b>
                                <p>Jan 14, 2020</p>
                            </a>
                        </div>

                        <div className="categories">
                            <h3>Categories</h3>
                            <a href="#">
                                <b>Technology</b>
                                <p>-</p><b className="gray-text">20 Posts</b>
                            </a>
                            <a href="#">
                                <b>Freelancing</b>
                                <p>-</p><b className="gray-text">07 Posts</b>
                            </a>
                            <a href="#">
                                <b>Writing</b>
                                <p>-</p><b className="gray-text">16 Posts</b>
                            </a>
                            <a href="#">
                                <b>Marketing</b>
                                <p>-</p><b className="gray-text">11 Posts</b>
                            </a>
                            <a href="#">
                                <b>Business</b>
                                <p>-</p><b className="gray-text">35 Posts</b>
                            </a>
                            <a href="#">
                                <b>Education</b>
                                <p>-</p><b className="gray-text">14 Posts</b>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
        :
        (
            <h3 className='title'>Ingen artikel hittades</h3>
        )
}

export default ArticlesSection