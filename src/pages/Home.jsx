
import { Link } from "react-router-dom";

import project1 from "../assets/project1.jpg";
import home from "../assets/home.jpg";

import "../styles/home.css";

const Home = () => {
  return (
    <main className="home-page">

      {/* =====================================================
          LANDING / HERO
      ===================================================== */}

      <section
        className="home-hero"
        style={{
          backgroundImage: `url(${home})`,
        }}
      >

        <div className="home-hero-overlay"></div>

        <div className="container home-hero-content">

          <span className="hero-tag">
            POWERING BUSINESS • POWERING PROGRESS
          </span>

          <h1>
            Reliable Power
            <br />
            <span>For Every Need.</span>
          </h1>

          <p>
            Complete generator and electrical power solutions
            engineered for reliable, uninterrupted performance.
          </p>

          <div className="hero-buttons">

            <Link
              to="/enquire"
              className="home-btn home-btn-light"
            >
              Enquire Now
            </Link>

            <Link
              to="/services"
              className="home-btn home-btn-outline"
            >
              Explore Solutions
            </Link>

          </div>

        </div>


        {/* HERO INFORMATION */}

        <div className="hero-info-bar">

          <div className="container hero-info-inner">

            <div className="hero-info-item">
              <strong>5–2000</strong>
              <span>kVA Solutions</span>
            </div>

            <div className="hero-info-item">
              <strong>24/7</strong>
              <span>Service Support</span>
            </div>

            <div className="hero-info-item">
              <strong>Multi</strong>
              <span>Brand Expertise</span>
            </div>

            <div className="hero-info-item">
              <strong>End-to-End</strong>
              <span>Power Solutions</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="welcome-section">

        <div className="container welcome-grid">

          <div className="welcome-image-wrap">

            <img
              src={project1}
              alt="Nanjundeshwara Enterprises power solution"
              className="welcome-image"
            />

            <div className="welcome-experience">
              <strong>POWER</strong>
              <span>YOU CAN RELY ON</span>
            </div>

          </div>


          <div className="welcome-content">

            <span className="home-label">
              WELCOME TO NANJUNDESHWARA ENTERPRISES
            </span>

            <h2>
              Powering Businesses
              <br />
              <span>With Confidence.</span>
            </h2>

            <p className="welcome-lead">
              We provide dependable generator and electrical
              power solutions designed around the specific
              requirements of businesses and industries.
            </p>

            <p>
              From generator sales and rental to installation,
              commissioning, maintenance and emergency support,
              our team provides complete power solutions under
              one roof.
            </p>

            <p>
              With multi-brand expertise and strong technical
              knowledge, we help our customers maintain reliable
              power when it matters most.
            </p>

            <Link
              to="/about"
              className="home-text-link"
            >
              Know More About Us
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          POWER SOLUTIONS
      ===================================================== */}

      <section className="solutions-section">

        <div className="container">

          <div className="solutions-heading">

            <div>

              <span className="home-label">
                WHAT WE OFFER
              </span>

              <h2>
                Our Power
                <span> Solutions</span>
              </h2>

            </div>

            <p>
              Reliable electrical and power solutions designed
              to meet your operational requirements.
            </p>

          </div>


          <div className="solution-grid">

            <div className="solution-card">

              <div className="solution-top">
                <span>01</span>
                <div className="solution-icon">⚡</div>
              </div>

              <h3>Generator Solutions</h3>

              <p>
                Multi-brand generator solutions from 5–2000 kVA,
                including sales, rental, installation, service
                and AMC.
              </p>

              <Link to="/services">
                Explore Solution <span>→</span>
              </Link>

            </div>


            <div className="solution-card">

              <div className="solution-top">
                <span>02</span>
                <div className="solution-icon">▣</div>
              </div>

              <h3>LT Panel Customization</h3>

              <p>
                Customized LT panels engineered for safe,
                efficient and dependable electrical distribution.
              </p>

              <Link to="/services">
                Explore Solution <span>→</span>
              </Link>

            </div>


            <div className="solution-card">

              <div className="solution-top">
                <span>03</span>
                <div className="solution-icon">◈</div>
              </div>

              <h3>HT Transformer Solutions</h3>

              <p>
                HT transformer supply, installation and
                commissioning for commercial and industrial needs.
              </p>

              <Link to="/services">
                Explore Solution <span>→</span>
              </Link>

            </div>


            <div className="solution-card">

              <div className="solution-top">
                <span>04</span>
                <div className="solution-icon">◎</div>
              </div>

              <h3>Chemical Earthing</h3>

              <p>
                Reliable grounding and chemical earthing solutions
                designed to improve electrical safety.
              </p>

              <Link to="/services">
                Explore Solution <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="values-section">

        <div className="container">

          <div className="values-heading">

            <span className="home-label">
              WHY CHOOSE US
            </span>

            <h2>
              Built On
              <span> Reliability.</span>
            </h2>

            <p>
              We believe dependable power is more than equipment.
              It is about expertise, service and a commitment to
              being there when our customers need us.
            </p>

          </div>


          <div className="values-grid">

            <div className="value-item">

              <div className="value-letter">
                T
              </div>

              <div>
                <h3>Trust in Every Connection</h3>

                <p>
                  Dependable solutions designed to keep your
                  operations running without interruption.
                </p>
              </div>

            </div>


            <div className="value-item">

              <div className="value-letter">
                R
              </div>

              <div>
                <h3>Reliable Power Solutions</h3>

                <p>
                  Technical knowledge and multi-brand experience
                  for the right power solution.
                </p>
              </div>

            </div>


            <div className="value-item">

              <div className="value-letter">
                U
              </div>

              <div>
                <h3>Understanding Your Requirements</h3>

                <p>
                  Responsive installation, maintenance and
                  emergency support throughout the journey.
                </p>
              </div>

            </div>


            <div className="value-item">

              <div className="value-letter">
                S
              </div>

              <div>
                <h3>Seamless Service & Support</h3>

                <p>
                  Transparent communication and solutions
                  delivered with responsibility.
                </p>
              </div>

            </div>


            <div className="value-item">

              <div className="value-letter">
                T
              </div>

              <div>
                <h3>Timely & Professional Execution</h3>

                <p>
                  Transparent communication and solutions
                  delivered with responsibility.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-final-cta">

        <div className="container final-cta-inner">

          <div>

            <span className="home-label light-label">
              LET'S WORK TOGETHER
            </span>

            <h2>
              Need A Reliable
              <br />
              <span>Power Solution?</span>
            </h2>

            <p>
              Share your power requirements, and our team will guide you to the right solution.
            </p>

          </div>

          <Link
            to="/enquire"
            className="home-btn home-btn-light"
          >
            Enquire Now
          </Link>

        </div>

      </section>

    </main>
  );
};

export default Home;