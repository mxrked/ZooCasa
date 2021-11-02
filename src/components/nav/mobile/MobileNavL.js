import { Link } from "react-router-dom";

const MobileNavL = () => {
  return (
    <div className="col-6 mobile-nav-main-side" id="mobileNavL">
      <div className="mobile-nav-main-side-cnt">
        <Link to="/home" className="page-transition" id="mobileNavLogo">
          <h2>ZooCasa</h2>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavL;
