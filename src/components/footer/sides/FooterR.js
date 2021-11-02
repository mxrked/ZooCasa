import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterR = () => {
  return (
    <div className="footer-main-side-cnt">
      <div className="footer-socials">
        <a href="#" className="page-transition">
          <FaTwitter />
        </a>
        <a href="#" className="page-transition">
          <FaFacebook />
        </a>
        <a href="#" className="page-transition">
          <FaInstagram />
        </a>
      </div>

      <div className="footer-contact">
        <a href="#" className="page-transition">
          contact@basicallyeasy.com
        </a>

        <a href="#" className="page-transition">
          +1 202-555-0842
        </a>
      </div>
    </div>
  );
};

export default FooterR;
