import { Link } from "react-router-dom";

const DesktopNavL = () => {
  return (
    <div className="desktop-nav-main-side col-lg-4 col-md-4" id="desktopNavL">
      <div className="desktop-nav-main-side-cnt">
        <Link to="/home" className="page-transition" id="desktopNavLogo">
          <div className="page-transition">
            <h1>ZooCasa</h1>

            <span>Family Zoo</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavL;
