import React from "react";
import Services from "./Services";
import img from "../assets/services/aviation.jpg";

function ServicesAviation() {
  const details = {
    title: "Aviation",
    heading: "Enhance Safety with Colorglo Aircraft Maintenance Services",
    subheading:
      "Trust Colorglo for expert aircraft maintenance and experience the difference. Let us keep your aircraft in top condition. Contact us today and fly with confidence.",
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
          <p className="my-5">
            Whether passengers are on a long or short flight, traveling on
            business or pleasure, <b>they seek quality, comfort and cleanliness.</b>
            With so much competition, you wouldn’t want to lose passengers
            because they found the flight interiors unsightly or the upholstery
            faded, would you?
          </p>
          <p className="my-5">
            <b>Color Glo offers a wide range of products and services</b> that will
            keep the aircraft interiors; aircraft seats, side panels,
            headliners, seat bases, table tops, and window reveals <b>vacuumed,
            waxed and polished.</b> Our services include cleaning and conditioning,
            repairing worn areas, and re-dying damaged areas. Our products
            clubbed with our expertise will take care of scratches, stains, and
            tears of all shapes and sizes.
          </p>
          <p className="my-5">
            <b>Color Glo specialists have worked with all grades of leather, vinyl,
            and plastic. We follow strict quality controls and protocols.</b> One of
            the many benefits of working with Color Glo is that all our products
            are FAA/EASA approved and environmentally friendly.
          </p>
          <p className="my-5">
            The next time you have an annual inspection coming up, Color Glo
            will be happy to give your aircraft a facelift.
          </p>
          <p className="my-5">
            Products and services that will keep your ratings high
          </p>
        </div>
      </Services>
    </div>
  );
}

export default ServicesAviation;
