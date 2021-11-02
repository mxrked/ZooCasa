import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const DSocials = () => {
  return (
    <div>
      <div id="dSocials">
        <div className="d-socials-cnt">
          <a href="#" className="page-transition">
            <FaTwitter />
          </a>

          <a href="#" className="page-transition">
            <FaFacebook />
          </a>

          <span className="empty-cell" />

          <a href="#" className="page-transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DSocials;
