import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BentleySeat from "../assets/products/BentleySeat.jpg";
import AircraftInteriorPanel from "../assets/products/AircraftInteriorPanel.jpg";
import AnilineWingChair from "../assets/products/AnilineWingChair.jpg";
import Boots from "../assets/products/Boots.jpg";
import BusinessClassSeat from "../assets/products/BusinessClassSeat.jpg";
import HeirloomBag from "../assets/products/HeirloomBag.jpg";
import LeatherSofa from "../assets/products/LeatherSofa.jpg";
import OfficeChair from "../assets/products/OfficeChair.jpg";
import RollsRoyceDoor from "../assets/products/RollsRoyceDoor.jpg";
import Seat from "../assets/products/Seat.jpg";
import VehicleAcPanel from "../assets/products/VehicleAcPanel.jpg";
import { Link } from "react-router-dom";

const projects = [
  { id: 1, category: "Automotive", title: "Bentley Seat", image: BentleySeat },
  { id: 2, category: "Automotive", title: "Vehicle AC Panel", image: VehicleAcPanel },
  { id: 3, category: "Automotive", title: "Rolls Royce Door Panel", image: RollsRoyceDoor },
  { id: 4, category: "Aviation", title: "Business Class Seat", image: BusinessClassSeat },
  { id: 5, category: "Aviation", title: "Aircraft Interior Panel", image: AircraftInteriorPanel },
  { id: 6, category: "Boutique", title: "Heirloom Bag", image: HeirloomBag },
  { id: 7, category: "Boutique", title: "Boots", image: Boots },
  { id: 8, category: "Commercial", title: "Seat", image: Seat },
  { id: 9, category: "Commercial", title: "Office Chair", image: OfficeChair },
  { id: 10, category: "Residential", title: "Aniline Wing Chair Footstool", image: AnilineWingChair },
  { id: 11, category: "Residential", title: "Leather Sofa", image: LeatherSofa },
];

const categories = ["All", "Automotive", "Aviation", "Boutique", "Commercial", "Residential"];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const newFilteredProjects =
      selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory);
  
    setFilteredProjects(newFilteredProjects);
    setIsLoading(false);
  }, [selectedCategory]);
  

  const formatTitleForUrl = (title) => title.replace(/\s+/g, '');

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-6">Featured Projects</h2>
      <p className="text-center mb-8">A Glimpse of Our Expertise & Craftsmanship.</p>

      <div className="flex flex-wrap gap-3 justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 bg-slate-200 rounded ${
              selectedCategory === category ? "bg-slate-300 text-slate-800" : "bg-slate-200 text-slate-700 border border-brown-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredProjects.map((project, index) => (
          <Link
            key={project.id}
            to={`/projects/${formatTitleForUrl(project.title)}`}
            className={`w-full md:w-1/3 lg:w-1/4 border rounded-lg overflow-hidden transform transition-transform duration-500 ${
              isLoading ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
            data-aos="fade-up"
          >
            <div className="relative pt-[56.25%] bg-gray-200"> {/* 16:9 aspect ratio */}
              <img src={project.image} alt={project.title} className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <div className="px-4 py-2 bg-orange-50 text-center">
              {project.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
