import React from 'react'
import './ServiceBox.css'
import { Link } from 'react-router-dom'

const ServiceBox = ({ title, description, url }) => {
    return (
        <Link className="service-box" to={url}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="end-content">
                <button className="btn-round"><i className="fa-regular fa-arrow-right"></i></button>
            </div>
        </Link>
    )
}

export default ServiceBox