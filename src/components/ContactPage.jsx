import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
function ContactPage() {
  return (
    <>
      <div className="flex justify-around items-center px-24 gap-12 mt-24">
        <div>
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
