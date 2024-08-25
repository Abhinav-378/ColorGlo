import React from "react";
import ContactForm from "./ContactForm";
import bg from "../assets/contactBg.jpg";

function ContactSection() {
  return (
    <>
      <div
        className="h-fit py-24 my-20 flex justify-center items-center flex-col"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="uppercase text-white md:text-5xl pb-10 text-center text-3xl ">
          Get in touch with us
        </h1>
        <ContactForm />
      </div>
    </>
  );
}

export default ContactSection;
