import React from 'react'
import './TitleSection.css'
import element_showcase from '../../assets/images/element-showcase.svg'

const TitleSection = (text) => {
    return (
        <section className="title-section">
            <div className="container">
                <p>{text.subtitle}</p>
                <h1>{text.title}</h1>
            </div>
            <img className='element-showcase' src={element_showcase} />
        </section>
    )
}

export default TitleSection