import { FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterL = () => {
  return (
    <div className="footer-main-side-cnt">
      <div className="footer-logo-and-cr">
        <Link to="/home" className="page-transition">
          <h1 className="page-transition">ZooCasa</h1>
        </Link>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor.
        </p>

        <span>
          <FaCopyright className="fa-icon" /> Copyright 2021-2021, All rights
          reserved.
        </span>
      </div>
    </div>
  );
};

export default FooterL;
