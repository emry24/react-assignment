import React from 'react'
import './ProjectBox.css'
import { Link } from 'react-router-dom';

const ProjectBox = ({ src, text }) => {
    return (
        <Link className="project" to="#">
            <img src={src} />
            <h3>{text}</h3>
            <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
        </Link>
    )
}

export default ProjectBox