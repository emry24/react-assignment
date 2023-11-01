import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TitleSection from '../components/TitleSection/TitleSection';
import ContactSection from '../components/ContactSection/ContactSection';
import FormsSection from '../components/FormsSection/FormsSection';
import MapSection from '../components/MapSection/MapSection';


const Contacts = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
      <TitleSection subtitle="Home Contact" title="Let's Connect"/>
      <ContactSection />
      <FormsSection />
      <MapSection />
      </main>
      <Footer />
    </div>
  )
}

export default Contacts