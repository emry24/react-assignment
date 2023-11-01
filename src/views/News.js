import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import TitleSection from '../components/TitleSection/TitleSection'

const News = () => {
  return (
    
    <div className='wrapper'>
        <Header />
        <main>
        <TitleSection subtitle="Home News" title="News & Articles"/>
        
        </main>
        <Footer /> 
    </div>
  )
}

export default News