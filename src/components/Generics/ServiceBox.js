import React from 'react'
import './ServiceBox.css'

const ServiceBox = ({ title, description, url }) => {
    return (
        <div className="service-box" href="#">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="end-content">
                <a className="btn-round" href={url}><i className="fa-regular fa-arrow-right"></i></a>
            </div>
        </div>
    )
}

export default ServiceBox