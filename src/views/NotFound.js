import React from 'react'
import Footer from '../components/Footer/Footer'

const NotFound = () => {
  return (
    <div className="wrapper">
      <main>
        <section className="notfound-section">
        <h1>Page Not Found!</h1>
        <p>Unable to find the page you are looking for.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound