import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ConnectSection from '../components/ConnectSection/ConnectSection'
import ContactSection from '../components/ContactSection/ContactSection'
import FormsSection from '../components/FormsSection/FormsSection'
import MapSection from '../components/MapSection/MapSection'


const Contacts = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
      <ConnectSection />
      <ContactSection />
      <FormsSection />
      <MapSection />
      </main>
      <Footer />
    </div>
  )
}

export default Contacts