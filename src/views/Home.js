import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ShowcaseSection from '../components/ShowcaseSection/ShowcaseSection'
import BrandsSection from '../components/BrandsSection/BrandsSection'
import OurServices from '../components/OurServices/OurServices'
import FeatureSection from '../components/FeatureSection/FeatureSection'

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <ShowcaseSection />
        <BrandsSection />
        <FeatureSection />

        <OurServices />
        <h1>Välkommen hit</h1>
      </main>
      <Footer />
    </div>

  )
}

export default Home