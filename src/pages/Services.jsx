import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import heroGenerator from "../assets/hero-generator.jpg";
import servicess from "../assets/services.jpeg";
import djImage from "../assets/dj.jpg";

import multibrand from "../assets/multi-brand.jpg";
import generatorRental from "../assets/generator-rental.jpg";
import installation from "../assets/installation.jpg";
import maintenance from "../assets/maintenance.jpg";
import emergencyService from "../assets/emergency-service.jpg";
import ltPanel from "../assets/lt-panel.jpg";
import transformer from "../assets/transformer.jpg";
import chemicalEarthing from "../assets/chemical-earthing.jpg";

import "../styles/services.css";

const Services = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

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

  const services = [
    {
      number: "01",
      label: "POWER SOLUTIONS",
      title: (
        <>
          Multi-Brand DG Set
          <br />
          Sales
        </>
      ),
      description:
        "Reliable multi-brand generator solutions from 5 kVA to 2000 kVA, selected according to your power requirements, application and budget.",
      image: multibrand,
      alt: "Diesel generator set sales",
    },

    {
      number: "02",
      label: "POWER SOLUTIONS",
      title: (
        <>
          Generator
          <br />
          Rental
        </>
      ),
      description:
        "Flexible generator rental solutions for construction sites, events, commercial facilities, industries and temporary power requirements.",
      image: generatorRental,
      alt: "Generator rental solution",
    },

    {
      number: "03",
      label: "INSTALLATION",
      title: (
        <>
          Installation &
          <br />
          Commissioning
        </>
      ),
      description:
        "Complete generator installation, testing, commissioning and handover with attention to safety, performance and reliability.",
      image: installation,
      alt: "Generator installation and commissioning",
    },

    {
      number: "04",
      label: "MAINTENANCE",
      title: (
        <>
          AMC &
          <br />
          Preventive Service
        </>
      ),
      description:
        "Annual Maintenance Contracts, scheduled preventive maintenance, health checks and performance monitoring to reduce downtime.",
      image: maintenance,
      alt: "Generator maintenance service",
    },

    {
      number: "05",
      label: "SERVICE",
      title: (
        <>
          Breakdown &
          <br />
          Emergency Service
        </>
      ),
      description:
        "Fast technical support and breakdown service to restore your generator and electrical systems with minimum interruption.",
      image: emergencyService,
      alt: "Generator emergency service",
    },

    {
      number: "06",
      label: "ELECTRICAL",
      title: (
        <>
          LT Panel
          <br />
          Customization
        </>
      ),
      description:
        "Customized LT panel solutions designed for safe and efficient electrical distribution requirements.",
      image: ltPanel,
      alt: "LT electrical panel",
    },

    {
      number: "07",
      label: "ELECTRICAL",
      title: (
        <>
          HT Transformer
          <br />
          Solutions
        </>
      ),
      description:
        "HT transformer supply, installation, testing and commissioning solutions for commercial and industrial applications.",
      image: transformer,
      alt: "HT transformer solution",
    },

    {
      number: "08",
      label: "SAFETY",
      title: (
        <>
          Chemical
          <br />
          Earthing
        </>
      ),
      description:
        "Quality chemical earthing materials and complete earthing solutions for generators and electrical installations.",
      image: chemicalEarthing,
      alt: "Chemical earthing system",
    },
  ];

  const industries = [
    "Manufacturing & Industrial Plants",
    "Commercial & Corporate Buildings",
    "Healthcare & Hospitals",
    "Hospitality & Hotels",
    "Educational Institutions",
    "Residential & Township Projects",
    "Construction & Infrastructure",
    "IT Parks & Data Centres",
    "Government & Public Sector",
    "Retail, Warehousing & Logistics",
    "Food, Pharma & Agro Industries",
    "Energy, Utilities & Transportation",
  ];

  return (
    <div className="inner-page services-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="inner-hero services-hero"
        style={{
          backgroundImage: `linear-gradient(
            90deg,
            rgba(7, 25, 45, 0.88),
            rgba(7, 25, 45, 0.48)
          ), url(${servicess})`,
        }}
      >
        <div className="inner-hero-overlay">
          <div className="container inner-hero-content">

            <span className="hero-small-title">
              OUR SERVICES
            </span>

            <h1>
              Reliable Power.
              <br />
              Complete Solutions.
            </h1>

            <p>
              From supply and installation to maintenance and emergency
              support, we keep your power systems running reliably.
            </p>

            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Services</span>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          SERVICES INTRO
      ===================================================== */}

      <section className="services-intro-section">
        <div className="container services-intro-container">

          <div className="services-intro-content reveal reveal-left">

            <span className="section-label">
              WHAT WE DO
            </span>

            <h2>
              Power Solutions
              <br />
              Built Around You.
            </h2>

            <p>
              Nanjundeshwara Enterprises provides end-to-end generator and
              electrical power solutions for businesses, industries,
              institutions and infrastructure projects.
            </p>

            <p>
              Our services cover the complete power lifecycle—from
              consultation and supply to installation, commissioning,
              maintenance and emergency support.
            </p>

            <div className="about-highlight">
              <span className="highlight-line"></span>

              <strong>
                Quality Products. Expert Service. Lasting Support.
              </strong>
            </div>

          </div>


          <div className="services-intro-image reveal reveal-right">

            <div className="services-image-frame">

              {/* MIDDLE IMAGE - DJ.JPG */}

              <img
                src={djImage}
                alt="Generator and electrical power solution"
              />

              <div className="services-image-badge">
                <strong>5–2000</strong>
                <span>KVA SOLUTIONS</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES OFFERED
      ===================================================== */}

      <section className="section-padding services-offered-section">

        <div className="container">

          <div className="section-heading center-heading reveal reveal-up">

            <span className="section-label">
              SERVICES WE OFFER
            </span>

            <h2>
              Complete Power
              <br />
              Solutions.
            </h2>

            <p>
              Dependable products, professional engineering and responsive
              service for every stage of your power requirement.
            </p>

          </div>


          <div className="services-grid">

            {services.map((service, index) => (

              <article
                className="service-card reveal reveal-up"
                key={service.number}
                style={{
                  transitionDelay: `${index * 70}ms`,
                }}
              >

                <div className="service-card-image">

                  <img
                    src={service.image}
                    alt={service.alt}
                  />

                </div>


                <div className="service-card-content">

                  <div className="service-card-number">
                    {service.number}
                  </div>

                  <span className="service-mini-label">
                    {service.label}
                  </span>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <Link
                    to="/contact"
                    className="service-card-link"
                  >
                    Enquire Now
                    <span>→</span>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES WE SERVE
      ===================================================== */}

      <section className="section-padding services-industries-section">

        <div className="container">

          <div className="section-heading center-heading reveal reveal-up">

            <span className="section-label">
              INDUSTRIES WE SERVE
            </span>

            <h2>
              Powering Diverse
              <br />
              Industries.
            </h2>

            <p>
              Reliable power solutions for businesses, infrastructure and
              facilities across different sectors.
            </p>

          </div>


          {/* 3 COLUMN INDUSTRY LIST */}

          <div className="services-industry-bullet-grid">

            {/* COLUMN 1 */}

            <ul className="services-industry-list">

              {industries.slice(0, 4).map((industry, index) => (

                <li
                  className="reveal reveal-up"
                  key={industry}
                  style={{
                    transitionDelay: `${index * 60}ms`,
                  }}
                >

                  <span className="industry-bullet"></span>

                  <span>{industry}</span>

                </li>

              ))}

            </ul>


            {/* COLUMN 2 */}

            <ul className="services-industry-list">

              {industries.slice(4, 8).map((industry, index) => (

                <li
                  className="reveal reveal-up"
                  key={industry}
                  style={{
                    transitionDelay: `${(index + 4) * 60}ms`,
                  }}
                >

                  <span className="industry-bullet"></span>

                  <span>{industry}</span>

                </li>

              ))}

            </ul>


            {/* COLUMN 3 */}

            <ul className="services-industry-list">

              {industries.slice(8, 12).map((industry, index) => (

                <li
                  className="reveal reveal-up"
                  key={industry}
                  style={{
                    transitionDelay: `${(index + 8) * 60}ms`,
                  }}
                >

                  <span className="industry-bullet"></span>

                  <span>{industry}</span>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Services;