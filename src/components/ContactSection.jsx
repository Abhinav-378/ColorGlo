import React from 'react'
import ContactForm from './ContactForm'
import bg from '../assets/contactBg.jpg'

function ContactSection() {
  return (
    <>
      <div
        className='h-fit py-24 my-20 flex justify-center items-center'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <ContactForm />
      </div>
    </>
  )
}

export default ContactSection
