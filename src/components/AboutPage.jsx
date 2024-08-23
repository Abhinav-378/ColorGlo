import React, { useEffect } from "react";
import bg from "../assets/aboutBg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(71, 36, 33, 0.7)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-80 md:h-[60vh] flex justify-center items-center"
      >
        <h1 className="pt-8 text-5xl md:text-6xl text-white font-bold">
          About Us
        </h1>
      </div>

      <div className="my-12 mx-8 md:mx-24">
        <h1 className="text-4xl font-semibold my-3 leading-relaxed">
          From Humble Glass to{" "}
          <span className="bg-rose-100 text-4xl font-semibold me-2 px-2 rounded">
            Sheer Class
          </span>
        </h1>
        <p className="text-lg">
          It’s a chronicle of a far-sighted first foot forward! Color Glo was
          founded by Everett C Smith in 1973 in Minneapolis, US with the sole
          aim of becoming the leader in the mobile automotive reconditioning
          industry. Initially, Color Glo worked closely with glass repair and
          other products. Smith knew that in order to be the best, Color Glo
          needed to offer superior quality products. So he set out to start
          Color Glo’s very first research and development lab that would create
          an exclusive line of proprietary products. The best chemists were
          hired and after a few years created eight unique repair and
          restoration Color Glo products.
        </p>
      </div>
      <div className=" px-12 py-24 bg-gradient-to-b from-white via-orange-100 to-white">
        <h1 className="my-10 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl text-center ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-rose-800 from-rose-600">
            What We Do
          </span>
        </h1>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              data-aos={"fade-up"}
              className="bg-orange-50 p-5 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex flex-col justify-center"
            >
              <h2 className="text-xl font-semibold text-center">
                Our vane was favoured by the winds of change!
              </h2>
              <p className="text-base text-center">
                In the 80s, leather became a popular choice for upholstery and
                interior detailing in high-end cars, so Color Glo designed a
                leather-based product that worked so well with leather that a
                whole new market segment opened up for Color Glo.
              </p>
            </div>

            <div
              data-aos={"fade-up"}
              className="bg-orange-50 p-5 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex flex-col justify-center"
            >
              <h2 className="text-xl font-semibold text-center">
                Impossible to glow and not grow!
              </h2>
              <p className="text-base text-center">
                As the years passed and the customers grew, Color Glo’s eight
                products have grown to 100 products; each product fitting
                perfectly in the Color Glo system. Color Glo is an eco-friendly
                company, so each product is water-based, odorless, inflammable,
                and nontoxic. Color Glo’s reputation as a quality brand spread,
                and the rewards and awards soon followed along with recognition
                and praise in national and international publications.
              </p>
            </div>

            <div
              data-aos={"fade-up"}
              className="bg-orange-50 p-5 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex flex-col justify-center"
            >
              <h2 className="text-xl font-semibold text-center">
                The oyster spreads its shell!
              </h2>
              <p className="text-base text-center">
                Color Glo opened the first franchise in Minneapolis, Minnesota,
                and 35 years later, 40 countries are part of the Color Glo
                network. Color Glo operates two types of franchised systems:
                Color Glo International and Coustic Glo International.
              </p>
            </div>

            <div
              data-aos={"fade-up"}
              className="bg-orange-50 p-5 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex flex-col justify-center"
            >
              <h2 className="text-xl font-semibold text-center">
                Bursts of first!
              </h2>
              <p className="text-base text-center">
                In 2006, Color Glo became the first ISO 9001 certified company
                in the industry and soon became a popular choice in the
                automotive industry and the boating industry, with car
                dealerships, rental cars, commercial spaces, airlines, hotels,
                and restaurants. If there was leather, vinyl, glass, fabric,
                plastic, and other materials to be repaired, individuals and
                companies often chose Color Glo.
              </p>
            </div>

            <div
              data-aos={"fade-up"}
              className="bg-orange-50 p-5 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex flex-col justify-center"
            >
              <h2 className="text-xl font-semibold text-center">
                Big daddies in a queue!
              </h2>
              <p className="text-base text-center">
                Color Glo’s extensive range of products and exceptional services
                bagged them service and maintenance deals with Ferrari,
                Mercedes, BMW, and contracts with Federal Aviation
                Administration approved facilities.
              </p>
            </div>

            <div
              data-aos={"fade-up"}
              className="bg-orange-50 p-5 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex flex-col justify-center"
            >
              <h2 className="text-xl font-semibold text-center">
                It’s called the ‘generation proof’!
              </h2>
              <p className="text-base text-center">
                From a small office in 1973, today Color Glo is a
                third-generation family business with offices across the US,
                training centers, successful franchises operating across the
                globe, an onsite shipping center, and offsite manufacturing and
                warehousing centers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
