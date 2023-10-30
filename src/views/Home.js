import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ShowcaseSection from '../components/ShowcaseSection/ShowcaseSection'
import BrandsSection from '../components/BrandsSection/BrandsSection'
import OurServices from '../components/OurServices/OurServices'
import FeatureSection from '../components/FeatureSection/FeatureSection'
import SubscribeSection from '../components/SubscribeSection/SubscribeSection'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import ProjectAndCase from '../components/ProjectAndCase/ProjectAndCase'
import OurTeam from '../components/MeetOurTeam/OurTeam'
import Testimonial from '../components/Testimonial/Testimonial'
import ArticleAndNews from '../components/ArticleAndNews/ArticleAndNews'
import AboutCompany from '../components/AboutCompany/AboutCompany'

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <ShowcaseSection />
        <BrandsSection />
        <FeatureSection />
        <AboutCompany />
        <OurServices />
        <WhyChooseUs />
        <ProjectAndCase />
        <OurTeam />
        <Testimonial />
        <ArticleAndNews />
        <SubscribeSection />
      </main>
      <Footer />
    </div>

  )
}

export default Home