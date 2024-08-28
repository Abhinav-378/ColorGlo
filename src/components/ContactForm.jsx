import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    axios
      .post("http://localhost:5000/api/send", formData)
      .then((response) => {
        console.log("Email sent successfully!", response.data.message);
        setSent(true);
        setSending(false);
        setFormData({ name: "", email: "", mobile: "", message: "" });
      })
      .catch((error) => {
        console.log("Failed to send email.", error.message);
        setError(error.message);
        setSending(false);
      });
  };

  return (
    <form
      className="min-w-80 w-[40vw] mx-auto p-4 sm:p-8 bg-gradient-to-br bg-opacity-10 backdrop-blur-lg backdrop-filter rounded-lg border-2 border-solid border-orange-400"
      onSubmit={sendEmail}
    >
      <div className="w-full h-12 relative flex rounded-xl mb-8">
        <input
          required
          className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[rgb(64,112,244)] focus:shadow-md"
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <label
          className="absolute rounded-lg top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
          htmlFor="name"
        >
          Name
        </label>
      </div>

      <div className="w-full h-12 relative flex rounded-xl mb-8">
        <input
          required
          className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label
          className="absolute rounded-lg top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
          htmlFor="email"
        >
          Email Address
        </label>
      </div>

      <div className="w-full h-12 relative flex rounded-xl mb-8">
        <input
          required
          className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
          id="mobile"
          type="tel"
          value={formData.mobile}
          onChange={handleChange}
        />
        <label
          className="absolute rounded-lg top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
          htmlFor="mobile"
        >
          Mobile No.
        </label>
      </div>

      <div className="w-full h-24 relative flex rounded-xl mb-8">
        <textarea
          required
          className="peer w-full bg-transparent outline-none px-4 pt-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md resize-none h-full"
          id="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <label
          className="absolute rounded-lg top-4 bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-valid:top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
          htmlFor="message"
        >
          Message
        </label>
      </div>

      {sending ? (
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-br from-orange-300 to-orange-500 text-white rounded-lg hover:bg-[#3059c9] focus:ring-2 focus:ring-[#3059c9] cursor-wait"
          disabled
        >
          Sending...
        </button>
      ) : sent ? (
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-br from-green-300 to-green-500 text-white rounded-lg hover:bg-[#3059c9] focus:ring-2 focus:ring-[#3059c9]"
        >
          Email Sent Successfully!
        </button>
      ) : error ? (
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-br from-red-300 to-red-500 text-white rounded-lg hover:bg-[#3059c9] focus:ring-2 focus:ring-[#3059c9]"
        >
          Error: {error}
        </button>
      ) : (
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-br from-orange-300 to-orange-500 text-white rounded-lg hover:bg-[#3059c9] focus:ring-2 focus:ring-[#3059c9]"
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default ContactForm;
