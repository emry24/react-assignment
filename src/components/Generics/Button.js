import React from 'react'
import './Button.css'

const Button = ({ text, url }) => {
  return (
    <a className="btn-yellow" href={url}>
        {text}
    <i className="fa-regular fa-arrow-up-right"></i></a>
  )
}

export default Button