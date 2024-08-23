import React from "react";
import Services from "./Services";
import img from "../assets/services/corporate.jpg";
function ServicesCorporate() {
  const details = {
    title: "Corporate",
    heading: "Leather Repair for Corporates",
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
          <h1 className="my-5 font-bold">Leather Repair for Corporates</h1>
          <p>
            Are your office chairs looking <b>faded and drab </b>and your budget won’t
            allow for new chairs? Don’t worry. Color Glo has a number of
            products and services that will not only leave your chairs <b> looking
            as good as new but will be friendly on the pocket.</b>
          </p>
          <p>
            Color Glo offers leather and vinyl repair, color restoration,
            leather protection and deep leather conditioning. Every piece of
            furniture from the lobby, rows of cubicles, to the chairs in the
            boardroom will look brand new.
          </p>
          <p>
            Color Glo’s products have been put together by chemists in Color Glo
            laboratories. Color Glo products are environmentally friendly,
            odourless, and non-flammable. Color Glo specialists have gone
            through an extensive training and are certified so rest assured your
            office is in capable hands.
          </p>
          <h1 className="my-5 font-bold">Technology Parks</h1>
          <p>
            Technology parks look magnificent on the outside; the marriage of
            glass, steel, aluminium and granite. The inside is just as
            impressive; advanced lighting systems, carpeted floors, and
            colourful workstations. But oftentimes the executive chairs, sofas,
            and leather and vinyl interior detailing because of their<b> regular
            use develops scuffs, tears, and cracks and if left unattended the
            cracks will deepen and ruin the aesthetics</b> of the office. 
            <br /> What’s the
            solution then, throw?
          </p>
          <h1 className="mb-5 font-bold">No. Color Glo.</h1>
          <p>
            Color Glo’s extensive range of products – leather cleaner, lanolin
            based leather protection cream, leather re-finish, upholstery
            cleaner, along with our specialists will give your leather, vinyl,
            plastic, and other fabric the attention it needs to <b>look clean, new
            and smelling good.</b>
          </p>
        </div>
      </Services>
    </div>
  );
}

export default ServicesCorporate;
