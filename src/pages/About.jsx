import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import about from "../assets/about.jpg";
import aboutus from "../assets/aboutus.jpg"
import "../styles/inner-page.css";

const About = () => {

  /* =========================================
     SCROLL REVEAL ANIMATION
  ========================================= */
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


  return (
    <div className="inner-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className="inner-hero about-hero"
        style={{
          backgroundImage: `linear-gradient(
            90deg,
            rgba(7, 25, 45, 0.88),
            rgba(7, 25, 45, 0.48)
          ), url(${aboutus})`,
        }}
      >
        <div className="inner-hero-overlay">

          <div className="container inner-hero-content">

            <span className="hero-small-title">
              ABOUT US
            </span>

            <h1>
              Power Beyond
              <br />
              Expectations.
            </h1>

            <p>
              Powered by Quality.
              <br />
              Driven by Trust.
            </p>

            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ABOUT INTRO — COMPACT
      ===================================================== */}
      <section className="about-intro-section">

        <div className="about-dots about-dots-left">
          {Array.from({ length: 84 }).map((_, index) => (
            <span key={index}></span>
          ))}
        </div>


        <div className="about-intro-container">

          {/* TEXT */}
          <div className="about-intro-content reveal reveal-left">

            <span className="section-label">
              WHO WE ARE
            </span>

            <h2>
              Reliable Power.
              <br />
              Trusted Service.
            </h2>

            <p>
              Nanjundeshwara Enterprises delivers end-to-end,
              multi-brand generator and electrical power solutions,
              combining quality products, expert engineering and
              dependable after-sales support.
            </p>

            <p>
              From consultation and system design to installation,
              commissioning, maintenance and emergency service,
              we help businesses keep their power systems running
              reliably.
            </p>

            <div className="about-highlight">
              <span className="highlight-line"></span>

              <strong>
                Powered by Quality. Driven by Trust.
              </strong>
            </div>

          </div>


          {/* IMAGE */}
          <div className="about-intro-image reveal reveal-right">

            <div className="about-image-frame">

              <img
                src={about}
                alt="Nanjundeshwara Enterprises generator solution"
              />

              <div className="about-image-badge">
                <strong>5–2000</strong>
                <span>KVA SOLUTIONS</span>
              </div>

            </div>

          </div>

        </div>


        <div className="about-dots about-dots-right">
          {Array.from({ length: 84 }).map((_, index) => (
            <span key={index}></span>
          ))}
        </div>

      </section>


      {/* =====================================================
          MISSION FLOW
      ===================================================== */}
      <section className="about-purpose">

        <div className="container">

          <div className="about-purpose-heading reveal reveal-up">

            <span className="section-label">
              OUR MISSION
            </span>

            <h2>
              Quality. Service.
              <br />
              <span>Trust.</span>
            </h2>

            <p>
              Our commitment is built around delivering dependable
              power solutions and creating long-term value for every
              customer.
            </p>

          </div>


          <div className="mission-flow">

            {/* ITEM 01 */}
            <div className="mission-flow-item mission-left reveal reveal-left">

              <div className="mission-flow-card">

                <div className="mission-flow-number">
                  01
                </div>

                <div className="mission-flow-text">

                  <span className="mission-card-label">
                    QUALITY
                  </span>

                  <h3>
                    Quality Products
                  </h3>

                  <p>
                    Delivering quality-approved products and
                    trusted brands for dependable performance.
                  </p>

                </div>

              </div>

            </div>


            {/* ITEM 02 */}
            <div className="mission-flow-item mission-right reveal reveal-right">

              <div className="mission-flow-card">

                <div className="mission-flow-number">
                  02
                </div>

                <div className="mission-flow-text">

                  <span className="mission-card-label">
                    SERVICE
                  </span>

                  <h3>
                    Reliable Services
                  </h3>

                  <p>
                    Supporting customers through installation,
                    maintenance, repairs and dependable service.
                  </p>

                </div>

              </div>

            </div>


            {/* ITEM 03 */}
            <div className="mission-flow-item mission-left reveal reveal-left">

              <div className="mission-flow-card">

                <div className="mission-flow-number">
                  03
                </div>

                <div className="mission-flow-text">

                  <span className="mission-card-label">
                    DELIVERY
                  </span>

                  <h3>
                    On-Time Project Delivery
                  </h3>

                  <p>
                    Managing every project with precision,
                    safety and attention to timely completion.
                  </p>

                </div>

              </div>

            </div>


            {/* ITEM 04 */}
            <div className="mission-flow-item mission-right reveal reveal-right">

              <div className="mission-flow-card">

                <div className="mission-flow-number">
                  04
                </div>

                <div className="mission-flow-text">

                  <span className="mission-card-label">
                    RELATIONSHIP
                  </span>

                  <h3>
                    Lasting Customer Relationships
                  </h3>

                  <p>
                    Building lasting trust through transparent
                    communication and dependable support.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}
      <section className="section-padding why-about">

        <div className="container">

          <div className="section-heading center-heading reveal reveal-up">

            <span className="section-label">
              WHY CHOOSE US
            </span>

            <h2>
              More Than Power.
              <br />
              We Deliver Confidence.
            </h2>

            <p>
              Complete power solutions supported by engineering
              expertise, trusted products and dependable service.
            </p>

          </div>


          <div className="why-grid">

            <div className="why-card reveal reveal-up">

              <div className="why-card-top">
                <span className="why-number">
                  01
                </span>

                <span className="why-icon">
                  ↗
                </span>
              </div>

              <h3>
                Multi-Brand Expertise
              </h3>

              <p>
                Multi-brand generator solutions from 5–2000 kVA,
                selected around application, requirements and budget.
              </p>

            </div>


            <div className="why-card reveal reveal-up">

              <div className="why-card-top">
                <span className="why-number">
                  02
                </span>

                <span className="why-icon">
                  ↗
                </span>
              </div>

              <h3>
                End-to-End Solutions
              </h3>

              <p>
                From consultation and system design to supply,
                installation, commissioning and handover.
              </p>

            </div>


            <div className="why-card reveal reveal-up">

              <div className="why-card-top">
                <span className="why-number">
                  03
                </span>

                <span className="why-icon">
                  ↗
                </span>
              </div>

              <h3>
                Engineering Support
              </h3>

              <p>
                Practical technical solutions based on connected
                load, site conditions and future requirements.
              </p>

            </div>


            <div className="why-card reveal reveal-up">

              <div className="why-card-top">
                <span className="why-number">
                  04
                </span>

                <span className="why-icon">
                  ↗
                </span>
              </div>

              <h3>
                24×7 Emergency Support
              </h3>

              <p>
                Dependable emergency support focused on minimizing
                downtime and restoring reliable operation.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR EXPERTISE
      ===================================================== */}
      <section className="about-expertise">

        <div className="container">

          <div className="expertise-heading reveal reveal-up">

            <span className="section-label">
              OUR EXPERTISE
            </span>

            <h2>
              Complete Power
              <br />
              Solutions.
            </h2>

            <p>
              One partner for generator and electrical power
              requirements across different applications.
            </p>

          </div>


          <div className="expertise-grid">

            {/* CARD 01 */}
            <div className="expertise-card expertise-card-large reveal reveal-left">

              <div className="expertise-card-number">
                01
              </div>

              <div className="expertise-card-content">

                <span>
                  GENERATOR SOLUTIONS
                </span>

                <h3>
                  Multi-Brand Generator Solutions
                </h3>

                <p>
                  5–2000 kVA solutions covering sales, rental,
                  installation, service, AMC, repairs and
                  preventive & breakdown support.
                </p>

                <Link to="/services">
                  Explore Service
                  <span>→</span>
                </Link>

              </div>

            </div>


            {/* CARD 02 */}
            <div className="expertise-card reveal reveal-right">

              <div className="expertise-card-number">
                02
              </div>

              <span className="expertise-mini-label">
                ELECTRICAL
              </span>

              <h3>
                LT Panel
                <br />
                Customization
              </h3>

              <p>
                Customized LT panel solutions for electrical
                distribution requirements.
              </p>

            </div>


            {/* CARD 03 */}
            <div className="expertise-card reveal reveal-left">

              <div className="expertise-card-number">
                03
              </div>

              <span className="expertise-mini-label">
                ELECTRICAL
              </span>

              <h3>
                HT Transformer
                <br />
                Solutions
              </h3>

              <p>
                HT transformer supply, installation, testing
                and commissioning solutions.
              </p>

            </div>


            {/* CARD 04 */}
            <div className="expertise-card reveal reveal-right">

              <div className="expertise-card-number">
                04
              </div>

              <span className="expertise-mini-label">
                SAFETY
              </span>

              <h3>
                Chemical
                <br />
                Earthing
              </h3>

              <p>
                Quality chemical earthing materials and complete
                earthing solutions for electrical installations.
              </p>

            </div>

          </div>

        </div>

      </section>


     


     
    </div>
  );
};

export default About;