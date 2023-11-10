import React from 'react'
import Footer from '../components/Footer/Footer'
import Button from '../components/Generics/Button'
import element_showcase from '../assets/images/element-showcase.svg'

const NotFound = () => {
  return (
    <div className="wrapper">
      <main>
        <section className="notfound-section">
          <div className='container'>
            <h1>Page Not Found!</h1>
            <i className="fa-regular fa-ufo"></i>
            <div className='oops-message'>
              <p>Oops! The page you are looking for might be in another corner of the internet, or it may have been abducted by aliens.</p>
              <p> Either way, it's not here...</p>
            </div>
            <Button className="btn-yellow" text="Go to home page" url="/" />
          </div>
          <img className='element-notfound' src={element_showcase} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound