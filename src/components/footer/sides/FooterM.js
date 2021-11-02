import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";

const FooterM = () => {
  return (
    <div className="footer-main-side-cnt">
      <div className="footer-links">
        <ul>
          <li>
            <Link to="/home" className="page-transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="page-transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/team" className="page-transition">
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/contact" className="page-transition">
              Contact Us
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/exhibits#g0" className="page-transition">
              Exhibits
            </Link>
          </li>
          <li>
            <Link to="/exhibits#g1" className="page-transition">
              Felines
            </Link>
          </li>
          <li>
            <Link to="/exhibits#g2" className="page-transition">
              Primates
            </Link>
          </li>
          <li>
            <Link to="/exhibits#g3" className="page-transition">
              Aquatics
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-newsletter">
        <p>Sign up to our newsletter.</p>

        <div>
          <button id="footerNLGo" className="page-transition">
            <FiSend />
          </button>

          <input
            type="email"
            autoComplete="off"
            className="page-transition"
            id="footerNLInput"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterM;
