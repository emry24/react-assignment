import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const Button = ({ text, url, className }) => {
  return (
    <Link className={className} to={url}>
        {text}
    <i className="fa-regular fa-arrow-up-right"></i></Link>
  )
}

export default Button