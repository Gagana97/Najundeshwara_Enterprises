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
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.433318592147!2d77.5505989745452!3d12.879834916884558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fad7f7d258b%3A0xc0857c4f972de8cd!2sNanjundeshwara%20Enterprises!5e0!3m2!1sen!2sin!4v1791360891287!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
/>
        </div>

      </section>

    </div>
  );
};

export default Contact;