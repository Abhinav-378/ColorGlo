import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import ContactSection from './components/ContactSection'

function App() {

  return (
    <>
      <Navbar />
      <ContactSection />
      {/* <ContactForm /> */}
      <Footer />
      
    </>
  )
}

export default App
