import React from 'react'
import ArticlesSection from '../components/ArticlesSection/ArticlesSection'
import Header from '../components/Header/Header'
import TitleSection from '../components/TitleSection/TitleSection'
import Footer from '../components/Footer/Footer'



const NewsDetails = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main>
            <TitleSection subtitle="Home News" title="News & Articles"/>
            <ArticlesSection />   
            </main>
            <Footer />
        </div>
    )
}

export default NewsDetails