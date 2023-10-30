import React from 'react'
import './SectionTitle.css'

const SectionTitle = (text) => {
    return (

        <div className="section-title">
            <p>{text.subtitle}</p>
            <h2>{text.title}</h2>
        </div>
    )
}

export default SectionTitle