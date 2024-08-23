import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "./Card";
import Carpet from '../assets/solutions/Carpet.jpg';
import Fabric from '../assets/solutions/Fabric.jpg';
import Plastic from '../assets/solutions/Plastic.jpg';
import RollsRoyce from '../assets/solutions/RollsRoyce.jpg';
import Vinyl from '../assets/solutions/Vinyl.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const tabs = ["Leather", "Plastic", "Vinyl", "Fabric", "Carpet"];


const SlideTabsExample = () => {
  const [selected, setSelected] = useState(tabs[0]);
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  const details = [
    {
      title: "Carpet",
      content: "Color Glo installs or replaces heel pads in every type of vehicle. Some vehicles come with heel pads to protect the carpet, some do not. Heel pads can dramatically extend the life of your vehicles carpet and are very important especially in vehicles driven during winter. The salt and dirt have a dramatic affect on your vehicles carpet. Color Glo cleans and restores your carpet to like new condition. Color Glo offers color restoration/redye of carpets as well!",
      src: Carpet
    },
    {
      title: "Plastic",
      content: "Color Glo International provides repair and re-dye services to hard plastics. It’s a common issue in vehicles these days for the Dash board or door moldings to crack, become faded or even stained. We are able to restore plastic materials to like new condition.",
      src: Plastic
    },
    {
      title: "Vinyl",
      content: "Color Glo International repairs and restore vinyl!! Having spent the summer out on the boat, you now have stains and some damage to your seats? Call Color Glo. 70% of furniture sold these days is vinyl in most parts. Have a rip, cut, tear or stain on your home, RV or cabin furniture? Call Color Glo. Some vehicles have vinyl throughout, covering steering wheels, seats and trucks and even doors. Color Glo offers onsite service to repair, restore and re-dye your vinyl.",
      src: Vinyl
    },
    {
      title: "Fabric",
      content: "Color Glo International is the industry leader in restoring your investments. Color Glo can repair or clean anything from rips, tears, burns, frayed stitching, beverage & food stains, lipstick, ink stains and everything in between! We use water based products so you don’t have the dingy chemical feeling after we’ve completed our service. We even have general cleaning kits to provide you for the next time you find yourself needing a spot removal product that really works!",
      src: Fabric
    },
    {
      title: "Leather",  // Update this line
      content: "Color Glo International offers the best in leather restoration. Our certified technicians are completely mobile and come to you! We offer free estimates and provide onsite service that fits your schedule. Our products are water based and environmental friendly. They are safe for pets and children also. Our repairs, cleaning or color restoration can be done either at your home or work and most repairs cure within minutes so your investment is ready to use right away!",
      src: RollsRoyce
    },
  ];

  return (
    <div className="sm:px-8 px-5 py-14 ">
      <h1 className="text-5xl font-semibold text-center my-8">TAILORED SOLUTIONS FOR</h1>
      <div className="flex justify-center items-center flex-wrap gap-2">
        {tabs.map((tab) => (
          <Chip
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        ))}
      </div>

      {/* Sections corresponding to each tab */}
      <div className="mt-10 md:mx-10 rounded-lg">
        {details.map((detail, index) =>
          selected === detail.title && (
            <Card
              key={index}
              title={detail.title}
              content={detail.content}
              src={detail.src}
              data-aos="fade-right"
              data-aos-once="true"
            />
          )
        )}
      </div>
    </div>
  );
};

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-700 hover:text-slate-500 hover:bg-slate-100"
      } text-sm transition-colors px-3 py-2 rounded-xl relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.8 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl"
        ></motion.span>
      )}
    </button>
  );
};

export default SlideTabsExample;
