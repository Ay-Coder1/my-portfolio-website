import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/expirence/Experience';
import Service from './components/services/Service';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
   <>
          <Header />
          <Nav /> 
          <About />
          <Experience />
          <Service />
          <Portfolio />
          <Testimonial />
          <Contact />
          <Footer />
          
      </>
  )
}

export default App