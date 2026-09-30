import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container footer-main">

        <div className="footer-brand">

          <Link to="/" className="footer-logo-text">
            NANJUNDESHWARA
            <span>ENTERPRISES</span>
          </Link>

          <p className="footer-tagline">
            Powered by Quality. Driven by Trust.
          </p>

          <p>
            Reliable multi-brand generator and electrical power
            solutions designed to keep businesses running without
            interruption.
          </p>

        </div>


        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>

        </div>


        <div className="footer-column">

          <h3>Services</h3>

          <Link to="/services">Generator Solutions</Link>
          <Link to="/services">LT Panel Customization</Link>
          <Link to="/services">
            HT Transformer Supply
          </Link>
          <Link to="/services">
            Chemical Earthing
          </Link>

        </div>


        <div className="footer-column footer-contact">

          <h3>Contact</h3>

          <a href="tel:+919916050856">
            +91 9916050856
          </a>

          <a href="tel:+919632870172">
            +91 9632870172
          </a>

          <a href="mailto:info@nanjundeshwaraenterprises.com">
            info@nanjundeshwaraenterprises.com
          </a>

          <p>
            Raghavanahalli, Bengaluru – 560062
          </p>

        </div>

      </div>


      <div className="footer-bottom">

        <div className="container footer-bottom-inner">

          <p>
            © 2026 Nanjundeshwara Enterprises. All Rights Reserved.
          </p>

          <p>
            Serving Across Karnataka
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;