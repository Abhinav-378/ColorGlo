import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import bg from "../assets/homeBg.jfif";
import wave from "../assets/HomeWave.png";
import quoteBg from "../assets/colorGloBg.jpg";
import "./styles/waveStyle.css";
import AOS from "aos";
import "aos/dist/aos.css";
import restore from "../assets/icons/restore.svg";
import repair from "../assets/icons/repair.svg";
import care from "../assets/icons/care.svg";
import SlideTabsExample from "./SlideTabsExample";
import art1 from "../assets/art1.jpg";
import art2 from "../assets/art2.jpg";
import anab from "../assets/certified/anab.png";
import bbb from "../assets/certified/bbb.png";
import ifa from "../assets/certified/ifa.png";
import iso from "../assets/certified/iso.png";
import Categories from "./Categories";
import ContactSection from "./ContactSection";
import ButtonSolutions from "./ButtonSolutions";
import './styles/home.css'

function HomePage() {
  const location = useLocation(); // Get the current location (needed to detect the hash)

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    window.scrollTo(0, 0); // Scroll to top initially on page load

    if (location.hash === "#projects") {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]); // Re-run the effect when the location changes
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(71, 36, 33, 0.7)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[100vh] md:h-[90vh] flex flex-col justify-center items-start px-6 md:px-20 gap-8 relative overflow-hidden"
      >
        <h1 data-aos={"fade-up"} className="uppercase text-white font-medium text-6xl">
          Repair <br /> Restore & Repair
        </h1>
        <p data-aos={"fade-up"} data-aos-delay={400}  className="text-white text-2xl">Things Can be replace not memories</p>
        <ButtonSolutions data-aos={"fade-up"} data-aos-delay={400}/>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`wave wave${i + 1} hidden md:block`}
            style={{
              background: `url(${wave})`,
              backgroundSize: "1000px 50px",
            }}
          ></div>
        ))}
      </div>
      {/* Cards Section  */}
      <div className="h-full w-full py-24 px-4 md:px-12">
        <div className="grid gap-14 md:grid-cols-3 md:gap-12">
          <div
            data-aos={"fade-right"}
            className="rounded-xl bg-white p-6 text-center shadow-xl"
            
          >
            <div className="mx-auto flex h-24 w-24 -translate-y-16  transform items-center justify-center rounded-full shadow-lg">
              <img src={restore} alt="" />
            </div>

            <h1 className="text-darken mb-3 text-3xl font-semibold">RESTORE</h1>
            <h2 className="text-darken mb-3 text-xl font-medium">
              MLR as in Masters in Leather Restoration
            </h2>
            <p className="px-4 text-gray-500">
              Color Glo’s four decades of research and development have led to a
              whole range of superior performing products that have incorporated
              the latest technologies: cynoacrylate adhesive technology,
              advanced graining technology, and aniline leather restoration
              technology.
            </p>
          </div>

          <div
            data-aos={"fade-right"}
            data-aos-delay="100"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-24 w-24 -translate-y-16  transform items-center justify-center rounded-full shadow-lg">
              <img src={repair} alt="" />
            </div>
            <h1 className="text-darken mb-3 text-3xl font-semibold">REPAIR</h1>
            <h2 className="text-darken mb-3 text-xl font-medium">
              IRS as in Intricate Repair Service
            </h2>
            <p className="px-4 text-gray-500">
              There are many products and DIY videos demonstrating how to repair
              leather but many times the strong chemicals present in the product
              clubbed with inexperience in using the products can ruin good
              leather. That is why you should entrust your leather repair only
              to the experts.
            </p>
          </div>

          <div
            data-aos={"fade-right"}
            data-aos-delay="200"
            className="rounded-xl bg-white p-6 text-center shadow-xl"
          >
            <div className="mx-auto flex h-24 w-24 -translate-y-16 transform items-center justify-center rounded-full shadow-lg">
              <img src={care} alt="" />
            </div>
            <h1 className="text-darken mb-3 text-3xl font-semibold">CARE</h1>
            <h2 className="text-darken mb-3 text-xl font-medium">
              TLC as in Thorough Leather Cleansing
            </h2>
            <p className="px-4 text-gray-500">
              We know just what leather needs to stay supple and flexible. Each
              type of leather requires a specific care regime. We are familiar
              will all leathers that inhabit the marketplace. Our patented
              formulas clubbed with our expertise will keep you happy and your
              leather radiant.
            </p>
          </div>
        </div>
      </div>
      {/* Get Quote  */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(71, 36, 33, 0.8)), url(${quoteBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="py-24 px-24 flex flex-col justify-center items-center gap-12"
      >
        <h1 className="text-orange-300 text-5xl font-bold my-5">
          EXPERIENCE EXCELLENCE
        </h1>
        <p className=" text-orange-100 text-2xl font-medium">
          At Colorglo, We Provide Exclusive & Exceptional Service We Would
          Ourselves Want.
        </p>

        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Get a Quote
        </button>
      </div>
      {/* Solutions  */}{/* Solutions Section */}
<div id="solutions">
  <SlideTabsExample />
</div>

      {/* Categories  */}
      <Categories id="projects"  />
      {/* Artistry  */}
      <div className="my-12">
        <h1 className="text-6xl font-semibold text-orange-700 text-center">
          Unveiling the Artistry
        </h1>
        <p className="text-2xl  text-gray-800 text-center my-8">
          From Vintage Classics to Modern Marvels
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:px-24 sm:px-12 px-4 ">
          <div className="flex flex-col p-5 gap-4">
            <img src={art1} alt="" className="rounded-xl" />
            <div>
              <h1 className="text-3xl font-semibold mb-4">Beyond Surface</h1>
              <p className="text-lg font-normal">
                Intricate world of upholstery restoration, exploring the
                delicate art of reviving materials like plastic, vinyl, carpet,
                and fabric
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-col-reverse p-5 gap-4">
            <img src={art2} alt="" className="rounded-xl" />
            <div>
              <h1 className="text-3xl font-semibold mb-4">Beyond Surface</h1>
              <p className="text-lg font-normal">
                Intricate world of upholstery restoration, exploring the
                delicate art of reviving materials like plastic, vinyl, carpet,
                and fabric
              </p>
            </div>
          </div>
        </div>
      </div>
        
      <ContactSection/>
      <div className="flex flex-col gap-8 justify-between items-center space-y-4 md:space-y-0 md:space-x-6 px-4 md:px-20 my-5">
      <div className="uppercase my-5 text-4xl md:text-5xl font-bold text-center md:text-left">
        Certified & Recognised
      </div> 
      {/* Infinite smooth scrolling slider for small screens */}
      <div className="block sm:hidden w-full overflow-hidden">
        <div className="slider">
          <div className="slider-track">
            <div className="slide mx-5"><img src={bbb} alt="BBB" className="w-40 h-auto mx-auto " /></div>
            <div className="slide mx-5"><img src={ifa} alt="IFA" className="w-40 h-auto mx-auto " /></div>
            <div className="slide mx-5"><img src={anab} alt="ANAB" className="w-40 h-auto mx-auto " /></div>
            <div className="slide mx-5"><img src={iso} alt="ISO" className="w-40 h-auto mx-auto " /></div>

            {/* Duplicate slides for continuous loop */}
            <div className="slide mx-5"><img src={bbb} alt="BBB" className="w-40 h-auto mx-auto " /></div>
            <div className="slide mx-5"><img src={ifa} alt="IFA" className="w-40 h-auto mx-auto " /></div>
            <div className="slide mx-5"><img src={anab} alt="ANAB" className="w-40 h-auto mx-auto " /></div>
            <div className="slide mx-5"><img src={iso} alt="ISO" className="w-40 h-auto mx-auto " /></div>
          </div>
        </div>
      </div>

      {/* Static images visible on larger screens */}
      <div className="hidden sm:flex flex-row flex-wrap justify-around items-center gap-5">
        <img src={bbb} alt="BBB" className="w-32 md:w-48 h-auto" />
        <img src={ifa} alt="IFA" className="w-32 md:w-48 h-auto" />
        <img src={anab} alt="ANAB" className="w-32 md:w-48 h-auto" />
        <img src={iso} alt="ISO" className="w-32 md:w-48 h-auto" />
      </div>
    </div>

    </div>
  );
}

export default HomePage;
