import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ContactSection from './components/ContactSection.jsx'
import ContactForm from './components/ContactForm.jsx'
import ContactPage from './components/ContactPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import Categories from './components/Categories.jsx'
import ServicesAutomobiles from './components/ServicesAutomotive.jsx'
import ServicesResidential from './components/ServicesResidential.jsx'
import ServicesAviation from './components/ServicesAviation.jsx'
import ServicesCorporate from './components/ServicesCorporate.jsx'
import ServicesBoutique from './components/ServicesBoutique.jsx'
import HomePage from './components/HomePage.jsx'
import ProjectSeat from './components/Projects/ProjectsSeat.jsx'
import ProjectAcPanel from './components/Projects/ProjectsAcPanel.jsx'
import ProjectBentleySeat from './components/Projects/ProjectsBentleySeat.jsx'
import ProjectRollsRoyce from './components/Projects/ProjectsRollsRoyce.jsx'
import ProjectsAircraftInterior from './components/Projects/ProjectsAircraftInterior.jsx'
import ProjectsBag from './components/Projects/ProjectsBag.jsx'
import ProjectsBoots from './components/Projects/ProjectsBoots.jsx'
import ProjectsBusinessClassSeat from './components/Projects/ProjectsBusinessClassSeat.jsx'
import ProjectsChair from './components/Projects/ProjectsChair.jsx'
import ProjectsOfficeChair from './components/Projects/ProjectsOfficeChair.jsx'
import ProjectsSeat from './components/Projects/ProjectsSeat.jsx'
import ProjectsSofa from './components/Projects/ProjectsSofa.jsx'
import ServicesAutomotive from './components/ServicesAutomotive.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: "test",
        element: <Categories />
      },
      {
        path: "services/automotive",
        element: <ServicesAutomotive />
      },
      {
        path: "services/residential",
        element: <ServicesResidential />
      },
      {
        path: "services/aviation",
        element: <ServicesAviation />
      },
      {
        path: "services/corporate",
        element: <ServicesCorporate />
      },
      {
        path: "services/boutique",
        element: <ServicesBoutique />
      },
      {
        path: "projects/VehicleACPanel",
        element: <ProjectAcPanel />
      },
      {
        path: "projects/BentleySeat",
        element: <ProjectBentleySeat />
      },
      {
        path: "projects/RollsRoyceDoorPanel",
        element: <ProjectRollsRoyce />
      },
      {
        path: "projects/AircraftInteriorPanel",
        element: <ProjectsAircraftInterior />
      },
      {
        path: "projects/HeirloomBag",
        element: <ProjectsBag />
      },
      {
        path: "projects/boots",
        element: <ProjectsBoots />
      },
      {
        path: "projects/businessClassSeat",
        element: <ProjectsBusinessClassSeat />
      },
      {
        path: "projects/AnilineWingChairFootstool",
        element: <ProjectsChair />
      },
      {
        path: "projects/officeChair",
        element: <ProjectsOfficeChair />
      },
      {
        path: "projects/Seat",
        element: <ProjectsSeat />
      },
      {
        path: "projects/leatherSofa",
        element: <ProjectsSofa />
      }

    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
