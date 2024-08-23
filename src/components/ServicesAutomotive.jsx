import React from 'react';
import Services from './Services';
import img from '../assets/services/automobiles.jpg';


function ServicesAutomotive() {
  
  const details = {
    title: "Automotive",
    heading: "Experience Reliable Car Detailing with Colorglo",
    subheading: "At Colorglo, we’re not just detailing your car, we’re restoring its glory!"
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
          <b>The automotive industry</b> in India has <b>grown significantly</b> in the last decade.
          Today Indian roads sport Indian manufactured automobiles like Tata Motors, Maruti, 
          Kia, Hyundai, Renault, Toyota, Skoda, and Mahindra and Mahindra as well as a long list 
          of international luxury brands; Rolls Royce, Bentley, Ferrari, Porsche, Lamborghini, 
          Mercedes Benz, BMW, AUDI, Jaguar, Jeep, Porsche, and Volvo. No matter the segment, 
          people are willing to spend large amounts to have their car looking good on the outside 
          and the inside. Nothing says style and class better than leather detailing, leather 
          upholstery, and well-maintained vinyl, fabric, and plastic. As time passes, constant 
          exposure to grime, dust, and body oils, <b>your plush and expensive upholstery and 
          detailing will start looking a little worn out.</b>
          <br /> <br />
          The team at <b>Color Glo has designed an exclusive line of conditioners, cleaners, polishes, 
          repair kits, and recoloring kits</b> that will keep your vehicle’s interiors looking clean and 
          well maintained at all times. From Ferraris to Fiats and Mercs to Marutis, we attend to 
          each vehicle with the same passion and dedication because we know everybody loves their ride. 
          Say no to re-upholstery and <b>trust Color Glo’s automotive history.</b>
        </p>
      </Services>
    </div>
  );
}

export default ServicesAutomotive;
