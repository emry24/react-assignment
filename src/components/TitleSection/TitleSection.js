import React from 'react'
import './TitleSection.css'

const TitleSection = (text) => {
    return (
        <section className="title-section">
            <div className="container">
                <p>{text.subtitle}</p>
                <h1>{text.title}</h1>
            </div>
        </section>
    )
}

export default TitleSection