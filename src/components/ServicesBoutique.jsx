import React from 'react'
import Services from "./Services";
import img from "../assets/services/corporate.jpg";

function ServicesBoutique() {
    const details = {
        title: "Boutique",
        heading: "Hire Colorglo for Quality Leather Restoration",
        subheading: "",
      };
    
      return (
        <div>
          <Services
            title={details.title}
            heading={details.heading}
            subheading={details.subheading}
            img={img}
          >
            <div>
              <h1 className="my-5 font-bold">You can now enjoy you personal items much longer</h1>
              <p className="my-3">
              Are you thinking of throwing away that expensive leather jacket because of the mold? Does your favorite leather wallet have more scratches than money? And are those good old boots ready to bite the dust? Hit Pause. Hear us out. <b>We provide boutique services to repair, restore and recolor leather items</b> of personal use such as jackets, wallets, belts, shoes, laptop bags, etc.
              </p>
              <p className="my-3">
              With over 8 years’ experience in repairing and <b>restoring all types of leather goods</b>, Color Glo can help you with your leather repair and care needs.
              </p>
              <p className="my-3">
              At Color Glo, we have researched, experimented and finally developed leather <b>repair and restoration products</b> that are tough on the wear and tear, but gentle on the material. Our team of experts has formulated these products keeping your leather pH balance in mind. <b>Our customized boutique services will give your animal skin products a new lease of life.</b>
              </p>      
              
              <p className="my-3">
              Sometimes, the damage is minor, like a worn out or faded look. However, we still hesitate to use that dull looking handbag or wallet when traveling or meeting someone special. Not to worry. We also do partial or full color restoration without changing the product make.
              </p>
              <p className="my-3">
              If a section is too damaged for restoration, we can replace the section and color match it to blend with the surrounding leather.
              </p>
              <p className="my-3">
              So whether your favorite jacket is five years or 50, <b>
              we will give it a makeover so you can enjoy it for many more years.
              </b>
              </p>
              <p className="my-3">Why replace good memories when you can <b>just polish them!</b></p>
            </div>
          </Services>
        </div>
      );
}

export default ServicesBoutique
