import React from "react";
import icon from "../assets/wpIcon.png";
function WhatsappBtn() {
  return (
    <>
      <a href="https://api.whatsapp.com/send?phone=919840962950&text=Hello!%20I%27m%20enquring%20about%20Colorglo%20Services%20on%20https%3A%2F%2Fcolorglo.in" target="_blank">
        <div className="w-[56px] h-[56px] bottom-10 right-10 fixed z-50 ">
          <img src={icon} alt="" />
        </div>
      </a>
    </>
  );
}

export default WhatsappBtn;
