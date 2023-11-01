import React from 'react'

const BoxItem = ({ src, title, text }) => {
    return (
        <div className="box-item">
            <img src={src} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default BoxItem