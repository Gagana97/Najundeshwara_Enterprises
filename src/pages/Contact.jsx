import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import contactImage from "../assets/contact.jpeg";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      mobile: form.mobile,
      email: form.email,
      message: form.message,
      submittedAt: new Date().toLocaleString("en-IN", {
        dateStyle: "full",
        timeStyle: "short"
      })
    };

    try {
      await emailjs.send(
        "service_ac6bj77",
        "template_5lswsqo",
        templateParams,
        {
          publicKey: "Wex6EkKz6iEPndNW5"
        }
      );

      setSubmitted(true);

      setForm({
        name: "",
        mobile: "",
        email: "",
        message: ""
      });

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    } catch (error) {
      console.error("Contact form error:", error);
      console.error("Status:", error.status);
      console.error("Text:", error.text);

      alert(
        "Unable to send your message right now. Please try again."
      );
    }
  };

  return (
    <div className="contact-page">

      {/* HERO SECTION */}
      <section className="contact-hero">

        <img
          src={contactImage}
          alt="Contact Nanjundeshwara Enterprises"
          className="contact-hero-image"
        />

        <div className="contact-hero-overlay">
          <h1>CONTACT US</h1>
          <p>Home / Contact Us</p>
        </div>

      </section>


      {/* CONTACT INFORMATION */}
      <section className="contact-info-section">

        {/* OFFICE ADDRESS */}
        <div className="contact-info-card">

          <div className="contact-icon">📍</div>

          <h3>Office Address</h3>

          <p>
            Basement, 201, Swamy Vivekananda Rd,
            <br />
            2nd Cross Rd, Double Rd,
            <br />
            Narayana Nagar, 1st Block,
            <br />
            Bangalore City Municipal Corporation Layout,
            <br />
            Raghuvanahalli, Bengaluru,
            <br />
            Karnataka 560062
          </p>

        </div>


        {/* PHONE NUMBER */}
        <div className="contact-info-card">

          <div className="contact-icon">📞</div>

          <h3>Phone Number</h3>

          <p>

            

    

            
            <a href="tel:+919916050856">
              +91 99160 50856
            </a>

            <br />

            <a href="tel:+919632870172">
              +91 96328 70172
            </a>

          </p>

        </div>


        {/* EMAIL ADDRESS */}
        <div className="contact-info-card">

          <div className="contact-icon">✉️</div>

          <h3>Email Address</h3>

          <p>

            
           <a href="mailto:info@nanjundeshwaraenterprises.com">
              info@nanjundeshwaraenterprises.com
            </a>

            <br />
            

          </p>

        </div>

      </section>


      {/* CONTACT FORM + MAP */}
      <section className="contact-main-section">

        {/* CONTACT FORM */}
        <div className="contact-form-container">

          <h2>Contact Us</h2>

          {submitted ? (

            <div className="contact-success-message">

              <h3>Thank You!</h3>

              <p>
                Your message has been successfully sent.
                Our team will get in touch with you shortly.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>

            </div>

          ) : (

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />

              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile No."
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write Message"
                rows="6"
                required
              ></textarea>

              <button type="submit">
                Submit
              </button>

            </form>

          )}

        </div>


        {/* GOOGLE MAP */}
        <div className="contact-map">

          <iframe
            title="Nanjundeshwara Enterprises Location"
            src="https://www.google.com/maps?q=Basement%2C%20201%2C%20Swamy%20Vivekananda%20Rd%2C%202nd%20Cross%20Rd%2C%20Double%20Rd%2C%20Narayana%20Nagar%2C%201st%20Block%2C%20Raghuvanahalli%2C%20Bengaluru%2C%20Karnataka%20560062&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </section>

    </div>
  );
};

export default Contact;