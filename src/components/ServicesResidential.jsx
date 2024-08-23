import React from "react";
import Services from "./Services";
import img from "../assets/services/residential.jpg";

function ServicesResidential() {
  const details = {
    title: "Residential",
    heading: "Expert Leather Sofa Repair by Colorglo",
    subheading:
      "Revive Your Leather Sofa with Colorglo – Trust Us for Expert Leather Repair in Bangalore! Experience our skilled technicians, high-quality materials, and customized solutions. Get your sofa repaired quickly and affordably. Let us bring your sofa back to life – Contact Colorglo today!",
  };

  return (
    <div>
      <Services
        title={details.title}
        heading={details.heading}
        subheading={details.subheading}
        img={img}
      >
        <p>
          <b>Leather Repair for homes</b>
          <br />
           At Color Glo, we know how attached you are to
          your leather sofa set. You’ve had good times entertaining friends and
          family and watching TV. But of late you’ve started to notice scratches
          and fine lines marred over its beautiful surface. You are starting to
          think replacement or re-upholstery. Please don’t. Color Glo will have
          your sofa set looking as good as new in no time.
          <br />
           Color Glo offers <b>an
           exciting ranges of services and products</b> designed to service and
          restore leather, vinyl, fabric, carpet, and hard plastic. After an
          on-site visit Color Glo specialists will examine your furniture and
          after a comprehensive evaluation will give your leather furniture the
          attention it needs: color restoration, leather repair, furniture
          deodorizing, carpet vacuuming. 
          
         <p className="my-5 ">
         Color Glo products are non-flammable,
         odourless, water-based, environmental friendly and dry quickly.
         </p>
         
           Unlike
          other products in the market, our products have been around for 45
          years and are being used in over 50 countries. The advantages of
          choosing Color Glo is that you and your furniture will never have to
          leave your home. And even if you are planning to sell your leather
          sofa set Color Glo will give it a good shine after which you will get
          a higher resale price. 
          <br />
          <p className="font-bold py-5">
            Color Glo brings a shine to your furniture
          </p>
        </p>
      </Services>
    </div>
  );
}

export default ServicesResidential;
