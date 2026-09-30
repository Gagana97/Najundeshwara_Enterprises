import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import faqHero from "../assets/faq.jpeg";
import "../styles/faq.css";

const faqData = [
  {
    question: "Why should I choose Nanjundeshwara Enterprises?",
    answer: (
      <p>
        We provide <strong>end-to-end power solutions</strong> under one
        roof—from consultation and system design to supply, installation,
        commissioning, testing, and after-sales support. Our commitment to
        quality, timely delivery, and customer satisfaction makes us a trusted
        partner for reliable power solutions.
      </p>
    ),
  },

  {
    question: "What services do you provide?",
    answer: (
      <>
        <p>We offer:</p>
        <ul>
          <li>Multi-Brand DG Set Sales (5–2000 kVA)</li>
          <li>Generator Rental</li>
          <li>Installation &amp; Commissioning</li>
          <li>Annual Maintenance Contracts (AMC)</li>
          <li>Preventive &amp; Breakdown Services</li>
          <li>LT Panel Customization</li>
          <li>HT Transformer Solutions</li>
          <li>Chemical Earthing Solutions</li>
          <li>Electrical Infrastructure Solutions</li>
        </ul>
      </>
    ),
  },

  {
    question: "Which generator brands do you deal with?",
    answer: (
      <p>
        We supply <strong>multi-brand generator solutions</strong> to match
        your technical requirements, budget, and application.
      </p>
    ),
  },

  {
    question: "Do you provide free site inspections?",
    answer: (
      <p>
        Yes. Our technical team conducts a free site visit to assess the
        installation location, power requirement, ventilation, accessibility,
        and foundation before recommending the most suitable generator
        solution.
      </p>
    ),
  },

  {
    question: "How do you recommend the right generator capacity?",
    answer: (
      <>
        <p>Our engineers evaluate:</p>
        <ul>
          <li>Connected Load</li>
          <li>Running Load</li>
          <li>Starting Load</li>
          <li>Future Expansion</li>
          <li>Site Conditions</li>
          <li>
            <strong>
              Optimized DG Placement to Preserve Car Parking Space
            </strong>
          </li>
        </ul>

        <p>
          This ensures you receive the correct generator capacity without
          oversizing or undersizing.
        </p>
      </>
    ),
  },

  {
    question: "Do you provide complete installation and commissioning?",
    answer: (
      <p>
        <strong>Yes.</strong> We provide complete installation, testing,
        commissioning, and handover, ensuring the generator is ready for safe
        and reliable operation.
      </p>
    ),
  },

  {
    question: "Do you provide LT Panels and HT Transformer solutions?",
    answer: (
      <p>
        Yes. We offer complete LT Panel and HT Transformer solutions, including
        supply, installation, testing, and commissioning.
      </p>
    ),
  },

  {
    question: "Do you supply chemical earthing materials?",
    answer: (
      <p>
        Yes. We supply high-quality chemical earthing materials and provide
        complete earthing solutions for generators and electrical
        installations.
      </p>
    ),
  },

  {
    question: "Do you offer Annual Maintenance Contracts (AMC)?",
    answer: (
      <>
        <p>Yes. Our AMC includes:</p>
        <ul>
          <li>Scheduled Preventive Maintenance</li>
          <li>Breakdown Support</li>
          <li>Health Check-ups</li>
          <li>Performance Monitoring</li>
        </ul>
      </>
    ),
  },

  {
    question: "Is emergency service available?",
    answer: (
      <p>
        Yes. We provide <strong>24×7 emergency support</strong> to minimize
        downtime and restore your power system as quickly as possible.
      </p>
    ),
  },

  {
    question: "Will I receive project updates?",
    answer: (
      <>
        <p>
          Absolutely. We keep our customers informed throughout the project by
          sharing:
        </p>

        <ul>
          <li>Work Progress Updates</li>
          <li>Site Visit Reports</li>
          <li>Installation Photos</li>
          <li>Completed Work Images</li>
          <li>Project Milestones</li>
        </ul>

        <p>
          This ensures complete transparency from start to finish.
        </p>
      </>
    ),
  },

  {
    question: "Do you use quality materials?",
    answer: (
      <p>
        Yes. We use quality-approved products and trusted brands to ensure
        safety, durability, and long-term performance.
      </p>
    ),
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="inner-page faq-page">
      {/* Navbar and Footer are already included in App.jsx */}

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="inner-hero faq-hero"
        style={{
          backgroundImage: `linear-gradient(
            90deg,
            rgba(7, 25, 45, 0.88),
            rgba(7, 25, 45, 0.48)
          ), url(${faqHero})`,
        }}
      >
        <div className="inner-hero-overlay">
          <div className="container inner-hero-content">
            <span className="hero-small-title">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h1>
              Answers To Your
              <br />
              Questions.
            </h1>

            <p>
              Find answers to common questions about our power generation
              and electrical solutions.
            </p>

            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>FAQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ SECTION
      ===================================================== */}

      <section className="faq-section">
        <div className="container faq-container">
          <div className="faq-heading">
            <span className="section-label">FAQ</span>

            <h2>
              Frequently Asked
              <br />
              Questions.
            </h2>

            <p>
              We have answered some of the most common questions about our
              services, installations and support.
            </p>
          </div>

          <div className="faq-list">
            {faqData.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  className={`faq-item ${isActive ? "active" : ""}`}
                  key={item.question}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isActive}
                  >
                    <span>{item.question}</span>

                    <span className="faq-icon">
                      {isActive ? "−" : "+"}
                    </span>
                  </button>

                  <div className="faq-answer">
                    <div className="faq-answer-inner">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ CTA
      ===================================================== */}

      <section className="faq-cta-section">
        <div className="container faq-cta-container">
          <div>
            <span className="section-label">NEED MORE INFORMATION?</span>

            <h2>
              Have More
              <br />
              Questions?
            </h2>
          </div>

          <Link to="/contact" className="faq-cta-button">
            Contact Our Team
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;