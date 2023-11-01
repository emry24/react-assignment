import React from 'react'
import './CommentBox.css'
import rating_stars from '../../assets/images/rating-stars.svg';

const CommentBox = ({ text, src, name, title }) => {
    return (
        <div>
            <div className="comment-box">
                <img className="stars" src={rating_stars} alt="five red stars" />
                <div>
                    <i>{text}</i>
                </div>
            </div>
            <div className="clients">
                <img src={src} alt="woman in a striped shirt" />
                <div className="section-title">
                    <h3>{name}</h3>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentBox