import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 flex justify-center items-center text-center pt-8 h-[40vh] bg-gradient-to-b from-orange-200 via-orange-100 to-white">
        Contact Us
      </h1>
      <div className="flex flex-col-reverse md:flex-row justify-around items-center md:px-24 px-4 gap-12 mt-4">
        <div>
        <h1 className="uppercase font-medium md:text-5xl pb-5 text-center text-3xl ">
          Get in touch with us
        </h1>
          <ContactForm />
        </div>
        <div className="text-lg font-normal">
        <div className="mb-5">
            <h1 className="text-4xl font-semibold">Service Center</h1>
            <p>Bangalore : +91 9741701155</p>
          </div>
          <div>
            <h1 className="text-4xl font-semibold">Contact Us</h1>
            <p>
              Chennai : +91 9741701155 
            </p>
            <p>
            Cochin : +91 9741701155 
            </p>
            <p>
            Delhi WHATSAPP :
              +91 9741401155
            </p>
            <p>
            Hyderabad WHATSAPP : +91 9741401155 
            </p>
            <p>
            Mumbai WHATSAPP
            : +91 9741401155 
            </p>
            <p>
            Indore: +91 9993044874
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default ContactPage;
