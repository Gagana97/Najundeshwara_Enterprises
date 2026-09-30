import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import industrialGenerator from "../assets/industrial-generator.jpg";
import commercialPower from "../assets/commercial-power.jpg";
import hospitalGenerator from "../assets/hospital-generator.jpg";
import constructionPower from "../assets/construction-power.jpg";
import ltPanel from "../assets/lt-panel.jpg";
import htTransformer from "../assets/ht-transformer.jpg";
import chemicalEarthing from "../assets/chemical-earthing.jpg";
import chemicalEarthingDetail from "../assets/chemical-earthing-detail.jpg";

import "../styles/projects.css";

const projects = [
  {
    id: "industrial-generator-installation",
    number: "01",
    title: "Industrial Generator Installation",
    category: "INDUSTRIAL POWER",
    location: "Bengaluru, Karnataka",
    capacity: "500 kVA",
    year: "2025",
    image: industrialGenerator,

    overview:
      "This project involved the supply, installation and commissioning of a 500 kVA generator for an industrial facility requiring dependable backup power.",

    scope: [
      "Site inspection and power requirement assessment",
      "Generator supply and positioning",
      "Electrical cabling and connection",
      "Installation and commissioning",
      "Testing and performance verification",
    ],

    services: [
      "Generator Supply",
      "Installation",
      "Commissioning",
      "Testing",
      "After-Sales Support",
    ],
  },

  {
    id: "commercial-power-solution",
    number: "02",
    title: "Commercial Power Solution",
    category: "COMMERCIAL POWER",
    location: "Bengaluru, Karnataka",
    capacity: "250 kVA",
    year: "2025",
    image: commercialPower,

    overview:
      "A commercial backup power project designed to support uninterrupted operations in a busy commercial building.",

    scope: [
      "Load assessment",
      "Generator selection",
      "Supply and installation",
      "Testing and commissioning",
      "Customer handover",
    ],

    services: [
      "Power Assessment",
      "Generator Supply",
      "Installation",
      "Testing",
      "Maintenance Support",
    ],
  },

  {
    id: "hospital-generator-project",
    number: "03",
    title: "Hospital Generator Project",
    category: "HEALTHCARE",
    location: "Karnataka",
    capacity: "320 kVA",
    year: "2025",
    image: hospitalGenerator,

    overview:
      "A standby power solution developed for a healthcare facility where reliable and uninterrupted electricity is essential.",

    scope: [
      "Site inspection",
      "Generator capacity planning",
      "Installation and electrical integration",
      "Testing and commissioning",
      "Operational handover",
    ],

    services: [
      "Generator Supply",
      "Installation",
      "Electrical Integration",
      "Commissioning",
      "Service Support",
    ],
  },

  {
    id: "construction-site-power",
    number: "04",
    title: "Construction Site Power",
    category: "CONSTRUCTION",
    location: "South India",
    capacity: "125 kVA",
    year: "2025",
    image: constructionPower,

    overview:
      "A temporary power solution supplied to support construction activities and site operations.",

    scope: [
      "Site power requirement assessment",
      "Generator rental or supply",
      "Site placement and connection",
      "Testing and operational support",
      "Breakdown assistance",
    ],

    services: [
      "Generator Rental",
      "Site Installation",
      "Power Support",
      "Maintenance",
      "Emergency Service",
    ],
  },

  {
    id: "lt-panel-customization",
    number: "05",
    title: "LT Panel Customization",
    category: "ELECTRICAL SOLUTIONS",
    location: "Bengaluru, Karnataka",
    capacity: "Custom Solution",
    year: "2025",
    image: ltPanel,

    overview:
      "A customized LT panel solution developed to meet the electrical distribution requirements of the project.",

    scope: [
      "Requirement analysis",
      "Panel configuration",
      "Customization and assembly",
      "Testing",
      "Site installation support",
    ],

    services: [
      "LT Panel Design",
      "Customization",
      "Supply",
      "Testing",
      "Installation Support",
    ],
  },

  {
    id: "ht-transformer-installation",
    number: "06",
    title: "HT Transformer Installation",
    category: "HT ELECTRICAL",
    location: "Karnataka",
    capacity: "HT Solution",
    year: "2025",
    image: htTransformer,

    overview:
      "An HT transformer project covering supply, installation, testing and commissioning for a commercial or industrial facility.",

    scope: [
      "Technical requirement assessment",
      "Transformer supply",
      "Installation and connection",
      "Testing and commissioning",
      "Final handover",
    ],

    services: [
      "Transformer Supply",
      "Installation",
      "Testing",
      "Commissioning",
      "Technical Support",
    ],
  },

 {
  id: "chemical-earthing-project",
  number: "07",
  title: "Chemical Earthing Project",
  category: "EARTHING SOLUTIONS",
  location: "Bengaluru, Karnataka",
  capacity: "Custom Solution",
  year: "2025",
  image: chemicalEarthing,
  detailImage: chemicalEarthingDetail,

  overview:
    "A professional chemical earthing solution designed to provide effective grounding for electrical systems and improve overall electrical safety.",

  scope: [
    "Site inspection and earthing requirement assessment",
    "Earthing point identification",
    "Chemical earthing installation",
    "Earthing electrode and connection work",
    "Testing and earth resistance verification",
  ],

  services: [
    "Earthing Requirement Assessment",
    "Chemical Earthing",
    "Earthing Installation",
    "Earth Resistance Testing",
    "Technical Support",
  ],
},
];

const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = projects.find(
    (item) => item.id === projectId
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    const elements = document.querySelectorAll(
      ".project-details-page .reveal"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [projectId]);

  /* =====================================================
     PROJECT NOT FOUND
  ===================================================== */

  if (!project) {
    return (
      <div className="inner-page project-not-found">

        <div className="container">

          <h1>
            Project Not Found
          </h1>

          <p>
            The project you are looking for does not exist.
          </p>

          <Link
            to="/projects"
            className="project-card-link"
          >
            ← Back to Projects
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="inner-page project-details-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="inner-hero project-details-hero"
        style={{
          backgroundImage: `linear-gradient(
            90deg,
            rgba(7, 25, 45, 0.88),
            rgba(7, 25, 45, 0.48)
          ), url(${project.image})`,
        }}
      >

        <div className="inner-hero-overlay">

          <div className="container inner-hero-content">

            <span className="hero-small-title">
              {project.category}
            </span>

            <h1>
              {project.title}
            </h1>

            <p>
              {project.location}
            </p>

            <div className="breadcrumb">

              <Link to="/">
                Home
              </Link>

              <span>/</span>

              <Link to="/projects">
                Projects
              </Link>

              <span>/</span>

              <span>
                {project.title}
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECT OVERVIEW
      ===================================================== */}

      <section className="project-overview-section">

        <div className="container project-overview-container">

          {/* IMAGE */}

          <div className="project-overview-image reveal reveal-left">

            <img
  src={project.detailImage || project.image}
  alt={project.title}
/>

          </div>

          {/* CONTENT */}

          <div className="project-overview-content reveal reveal-right">

            <span className="section-label">
              PROJECT OVERVIEW
            </span>

            <h2>
              {project.title}
            </h2>

            <p>
              {project.overview}
            </p>

            <div className="project-info-grid">

              <div>

                <span>
                  PROJECT NO.
                </span>

                <strong>
                  {project.number}
                </strong>

              </div>

              <div>

                <span>
                  LOCATION
                </span>

                <strong>
                  {project.location}
                </strong>

              </div>

              <div>

                <span>
                  CAPACITY
                </span>

                <strong>
                  {project.capacity}
                </strong>

              </div>

              <div>

                <span>
                  YEAR
                </span>

                <strong>
                  {project.year}
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECT DETAILS
      ===================================================== */}

      <section className="section-padding project-details-section">

        <div className="container project-details-container">

          {/* SCOPE */}

          <div className="project-scope reveal reveal-left">

            <span className="section-label">
              SCOPE OF WORK
            </span>

            <h2>
              What We
              <br />
              Delivered.
            </h2>

            <ul>

              {project.scope.map((item) => (

                <li key={item}>

                  <span>
                    ✓
                  </span>

                  {item}

                </li>

              ))}

            </ul>

          </div>

          {/* SERVICES */}

          <div className="project-services reveal reveal-right">

            <span className="section-label">
              SERVICES PROVIDED
            </span>

            <h2>
              Complete
              <br />
              Support.
            </h2>

            <div className="project-services-list">

              {project.services.map(
                (service, index) => (

                  <div
                    key={service}
                    className="project-service-item"
                  >

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>
                      {service}
                    </strong>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BACK TO PROJECTS
      ===================================================== */}

      <section className="project-back-section">

        <div className="container">

          <Link
            to="/projects"
            className="project-back-link"
          >

            <span>
              ←
            </span>

            Back to All Projects

          </Link>

        </div>

      </section>

    </div>
  );
};

export default ProjectDetails;