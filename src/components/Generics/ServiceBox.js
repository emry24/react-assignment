import React from 'react'
import './ServiceBox.css'
import { Link } from 'react-router-dom'

const ServiceBox = ({ title, description, url }) => {
    return (
        <div className="service-box" href="#">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="end-content">
                <Link className="btn-round" to={url}><i className="fa-regular fa-arrow-right"></i></Link>
            </div>
        </div>
    )
}

export default ServiceBox