import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import projectsHero from "../assets/projects.jpg";

import industrialGenerator from "../assets/industrial-generator.jpg";
import commercialPower from "../assets/commercial-power.jpg";
import hospitalGenerator from "../assets/hospital-generator.jpg";
import constructionPower from "../assets/construction-power.jpg";
import ltPanel from "../assets/lt-panel.jpg";
import htTransformer from "../assets/ht-transformer.jpg";
import chemicalEarthing from "../assets/chemical-earthing.jpg";

import "../styles/projects.css";

const projects = [
  {
    id: "industrial-generator-installation",
    number: "01",
    title: "Industrial Generator Installation",
    category: "INDUSTRIAL POWER",
    location: "Bengaluru, Karnataka",
    capacity: "500 kVA",
    image: industrialGenerator,
    description:
      "Complete generator supply, installation and commissioning for an industrial facility requiring dependable backup power.",
  },
  {
    id: "commercial-power-solution",
    number: "02",
    title: "Commercial Power Solution",
    category: "COMMERCIAL POWER",
    location: "Bengaluru, Karnataka",
    capacity: "250 kVA",
    image: commercialPower,
    description:
      "A dependable backup power solution designed to support uninterrupted operations in a commercial building.",
  },
  {
    id: "hospital-generator-project",
    number: "03",
    title: "Hospital Generator Project",
    category: "HEALTHCARE",
    location: "Karnataka",
    capacity: "320 kVA",
    image: hospitalGenerator,
    description:
      "Reliable standby power infrastructure designed to support uninterrupted healthcare operations.",
  },
  {
    id: "construction-site-power",
    number: "04",
    title: "Construction Site Power",
    category: "CONSTRUCTION",
    location: "South India",
    capacity: "125 kVA",
    image: constructionPower,
    description:
      "Temporary power generation and rental support for construction sites and demanding project operations.",
  },
  {
    id: "lt-panel-customization",
    number: "05",
    title: "LT Panel Customization",
    category: "ELECTRICAL SOLUTIONS",
    location: "Bengaluru, Karnataka",
    capacity: "Custom Solution",
    image: ltPanel,
    description:
      "Customized LT panel design and supply developed to meet electrical distribution requirements.",
  },
  {
    id: "ht-transformer-installation",
    number: "06",
    title: "HT Transformer Installation",
    category: "HT ELECTRICAL",
    location: "Karnataka",
    capacity: "HT Solution",
    image: htTransformer,
    description:
      "HT transformer supply, installation, testing and commissioning for commercial and industrial requirements.",
  },
  {
    id: "chemical-earthing-project",
    number: "07",
    title: "Chemical Earthing Project",
    category: "EARTHING SOLUTIONS",
    location: "Bengaluru, Karnataka",
    capacity: "Custom Solution",
    image: chemicalEarthing,
    description:
      "Professional chemical earthing solution designed to provide effective grounding and electrical safety.",
  },
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const elements = document.querySelectorAll(
      ".projects-page .reveal"
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

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="inner-page projects-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="inner-hero projects-hero"
        style={{
          backgroundImage: `linear-gradient(
            90deg,
            rgba(7, 25, 45, 0.88),
            rgba(7, 25, 45, 0.48)
          ), url(${projectsHero})`,
        }}
      >
        <div className="inner-hero-overlay">
          <div className="container inner-hero-content">

            <span className="hero-small-title">
              OUR PROJECTS
            </span>

            <h1>
              Powering Projects.
              <br />
              Building Trust.
            </h1>

            <p>
              Explore some of the power and electrical solutions delivered
              for industries, businesses and infrastructure.
            </p>

            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Projects</span>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS INTRO
      ===================================================== */}

      <section className="projects-intro-section">

        <div className="container projects-intro-container">

          <div className="projects-intro-content reveal reveal-left">

            <span className="section-label">
              OUR WORK
            </span>

            <h2>
              Reliable Solutions.
              <br />
              Real Results.
            </h2>

            <p>
              Every project is handled with careful planning, quality
              products, expert installation and dependable after-sales
              support.
            </p>

            <p>
              Browse through our completed and ongoing project categories
              to understand the solutions we deliver.
            </p>

          </div>

          <div className="projects-intro-stat reveal reveal-right">

            <strong>07</strong>

            <span>
              PROJECTS BUILT ON QUALITY AND TRUST
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECT LIST
      ===================================================== */}

      <section className="section-padding projects-list-section">

        <div className="container">

          <div className="section-heading center-heading reveal reveal-up">

            <span className="section-label">
              PROJECT PORTFOLIO
            </span>

            <h2>
              Projects We
              <br />
              Have Delivered.
            </h2>

            <p>
              A selection of generator, electrical and power infrastructure
              projects handled by our team.
            </p>

          </div>

          <div className="projects-grid">

            {projects.map((project, index) => (

              <article
                className="project-card reveal reveal-up"
                key={project.id}
                style={{
                  transitionDelay: `${index * 70}ms`,
                }}
              >

                {/* PROJECT IMAGE */}

                <div className="project-card-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <span className="project-card-number">
                    {project.number}
                  </span>

                </div>

                {/* PROJECT CONTENT */}

                <div className="project-card-content">

                  <span className="project-card-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <div className="project-card-meta">

                    <span>
                      {project.location}
                    </span>

                    <span>
                      {project.capacity}
                    </span>

                  </div>

                  <p>
                    {project.description}
                  </p>

                  <Link
                    to={`/projects/${project.id}`}
                    className="project-card-link"
                  >
                    View Project
                    <span>→</span>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Projects;