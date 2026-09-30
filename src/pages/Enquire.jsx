import { useState } from "react";
import emailjs from "@emailjs/browser";
import enquire from "../assets/enquire.jpg"
import "../styles/enquire.css";

const Enquire = () => {

  const [service, setService] = useState("Generator");

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    location: "",
    industry: "",
    purpose: "",
    rating: "",
    siteStatus: "",
    brand: "",
    requirement: ""
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


 const handleSubmit = async (e) => {
  e.preventDefault();

  const templateParams = {
    service: service,
    name: form.name,
    mobile: form.mobile,
    location: form.location,
    industry: form.industry,
    purpose: form.purpose,
    rating: form.rating || "Not applicable",
    siteStatus: form.siteStatus || "Not applicable",
    brand: form.brand || "Not specified",
    requirement: form.requirement || "No additional details",
    submittedAt: new Date().toLocaleString("en-IN", {
      dateStyle: "full",
      timeStyle: "short"
    })
  };

  try {
   await emailjs.send(
  "service_ac6bj77",
  "template_0d3aq5h",
  templateParams,
  {
    publicKey: "Wex6EkKz6iEPndNW5"
  }
);

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  } catch (error) {
    console.error("Email sending failed:", error);

    alert(
      "Unable to send your enquiry right now. Please try again."
    );
  }
};


  const changeService = (selectedService) => {
    setService(selectedService);
    setSubmitted(false);
  };


  if (submitted) {
    return (
      <div className="enquire-page">

        <section
          className="enquire-hero"
          style={{
            backgroundImage: `url(${enquire})`
          }}
        >
          <div className="enquire-hero-overlay"></div>

          <div className="container enquire-hero-content">

            <span>ENQUIRE NOW</span>

            <h1>
              Thank You.
            </h1>

            <p>
              Your request has been successfully received.
            </p>

          </div>
        </section>


        <section className="section">

          <div className="container success-container">

            <div className="success-icon">
              ✓
            </div>

            <h2>
              Enquiry Received Successfully
            </h2>

            <p>
              Thank you for contacting Nanjundeshwara Enterprises.
              Our team will get in touch with you shortly.
            </p>

            <button
              className="btn btn-primary"
              onClick={() => setSubmitted(false)}
            >
              Submit Another Enquiry
            </button>

          </div>

        </section>

      </div>
    );
  }


  return (
    <div className="enquire-page">

      <section
        className="enquire-hero"
        style={{
          backgroundImage: `url(${enquire})`
        }}
      >
        <div className="enquire-hero-overlay"></div>

        <div className="container enquire-hero-content">

          <span>ENQUIRE NOW</span>

          <h1>
            Share Your Requirements.
          </h1>

          <p>
            Share your power requirements, and our team will guide you to the right solution.
          </p>

        </div>
      </section>


      <section className="section enquire-section">

        <div className="container">

          <div className="section-heading center">

            <span className="section-label">
              TELL US WHAT YOU NEED
            </span>

            <h2>
              Select Your
              <span> Requirement.</span>
            </h2>

          </div>


          {/* SERVICE SELECTOR */}

          <div className="service-selector">

            <button
              type="button"
              className={service === "Generator" ? "selected" : ""}
              onClick={() => changeService("Generator")}
            >
              <span>⚡</span>
              Generator
            </button>


            <button
              type="button"
              className={service === "LT Panel" ? "selected" : ""}
              onClick={() => changeService("LT Panel")}
            >
              <span>▣</span>
              LT Panel
            </button>


            <button
              type="button"
              className={
                service === "HT Transformer" ? "selected" : ""
              }
              onClick={() =>
                changeService("HT Transformer")
              }
            >
              <span>◈</span>
              HT Transformer
            </button>


            <button
              type="button"
              className={
                service === "Chemical Earthing" ? "selected" : ""
              }
              onClick={() =>
                changeService("Chemical Earthing")
              }
            >
              <span>◎</span>
              Chemical Earthing
            </button>

          </div>


          <form
            className="enquire-form"
            onSubmit={handleSubmit}
          >

            <div className="form-header">

              <span>YOUR DETAILS</span>

              <h3>
                {service} Requirement
              </h3>

            </div>


            <div className="form-grid">

              <div className="form-group">

                <label>
                  Company / Contact Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Mobile Number *
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Location *
                </label>

                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Project / site location"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Industry Type *
                </label>

                <select
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select industry
                  </option>

                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Healthcare</option>
                  <option>Hospitality</option>
                  <option>Residential</option>
                  <option>Other</option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  Purpose / Application *
                </label>

                <select
                  name="purpose"
                  value={form.purpose}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select purpose
                  </option>

                  <option>New DG Supply</option>
                  <option>Rental DG</option>
                  <option>DG Service — General Service</option>
                  <option>AMC</option>

                </select>

              </div>


              {service === "Generator" && (
                <>
                  <div className="form-group">

                    <label>
                      Required Generator Rating *
                    </label>

                    <select
                      name="rating"
                      value={form.rating}
                      onChange={handleChange}
                      required
                    >

                      <option value="">
                        Select rating
                      </option>

                      <option>5–25 kVA</option>
                      <option>30–82.5 kVA</option>
                      <option>100–250 kVA</option>
                      <option>Above 250 kVA</option>

                    </select>

                  </div>


                  <div className="form-group">

                    <label>
                      Site Status *
                    </label>

                    <select
                      name="siteStatus"
                      value={form.siteStatus}
                      onChange={handleChange}
                      required
                    >

                      <option value="">
                        Select site status
                      </option>

                      <option>Under Construction</option>
                      <option>Existing Building</option>

                    </select>

                  </div>


                  <div className="form-group">

                    <label>
                      Preferred Brand
                    </label>

                    <select
                      name="brand"
                      value={form.brand}
                      onChange={handleChange}
                    >

                      <option value="">
                        Select brand
                      </option>

                      <option>Cummins</option>
                      <option>Kirloskar</option>
                      <option>Volvo Eicher</option>
                      <option>Graves</option>
                      <option>Mahendra</option>
                      <option>Ashok Leyland</option>
                      <option>Eicher TMTL</option>

                    </select>

                  </div>
                </>
              )}

            </div>


            <div className="form-group full-form-group">

              <label>
                Requirement Details
              </label>

              <textarea
                name="requirement"
                value={form.requirement}
                onChange={handleChange}
                rows="6"
                placeholder={`Tell us about your ${service.toLowerCase()} requirement...`}
              ></textarea>

            </div>


            <button
              type="submit"
              className="btn btn-primary submit-btn"
            >
              Submit Enquiry
            </button>

          </form>

        </div>

      </section>

    </div>
  );
};

export default Enquire;